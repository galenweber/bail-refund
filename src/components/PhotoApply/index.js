import React from 'react';
import Scroll from 'react-scroll';
import './styles.css';
import imgSrc from 'url-loader?limit=10000!./bail-receipt.jpg';
import submittedImgSrc from 'url-loader?limit=10000!./submitted-graphic.jpg';

const Element = Scroll.Element;
const Link = Scroll.Link;

export default class PhotoApply extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      src: imgSrc,
      uploaded: false,
      submitted: false,
      loading: false,
      text: 'upload receipt photo',
      contactInfo: '',
      id: this.id(),
    };

    this.handleImage = this.handleImage.bind(this);
    this.sendContact = this.sendContact.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  id() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  sendContact(e) {
    this.setState({
      loading: true,
    });
    const { id, contactInfo } = this.state;
    const emailPromise = fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: `${id} \n ${contactInfo}`,
        subject: `Submission Confirmed (${id})`,
      })
    })
    .then((res) => {
      this.setState({
        loading: false,
        submitted: true,
        text: 'submitted!'
      });
    });
  }

  handleChange(event) {
    this.setState({contactInfo: event.target.value});
  }

  handleImage(e) {
    this.setState({ loading: true });

    const { uploaded, id } = this.state;

    const file = e.target.files[0];
    // Do something with the image file.
    this.setState({
      text: 'uploading receipt',
      src: URL.createObjectURL(file)
    });


    const formData = new FormData();
    formData.append('photo', file);
    formData.append('id', id);

    const emailPromise = fetch('/api/email/photo', {
      method: 'POST',
      body: formData,
    })
    .then((res) => {
      this.setState({
        loading: false,
        text: 'submit receipt',
        uploaded: true,
      });
    });
  }

  render() {

    const { loading, text, uploaded, submitted, contactInfo } = this.state;

    const hiddenStyle = { visibility: 'hidden' };

    let subtext = <span>(No receipt? Complete a <Link
            to="manualApplyScrollTo"
            smooth={true}
            offset={-50}
            duration={500}
            delay={100}>
            manual application here
        </Link>.)</span>

    const contactButtonText = (loading) ? 'sending' : 'send';

    if (uploaded && !submitted) subtext = 'Tap to submit your receipt for review';
    if (uploaded && submitted) subtext = 'Success! We will reach out soon';
    if (loading) subtext = 'This can take a minute...';

    return (
      <div className="photo-apply container">
        <div
          style={{display: (uploaded && !submitted) ? 'initial' : 'none'}}
          className="photo-apply__popup-background">
          <div className="photo-apply__popup">
            <div className="photo-apply__popup-blue-bar"></div>
            <div className="photo-apply__popup-body">
              <h1 className="popup__header">Almost done!</h1>
              <p>Enter the email or phone number you'd like us to send your decision to.</p>
              <div className="popup__input-container">
                <input
                  className="popup__input"
                  type="email"
                  autoCapitalize="none"
                  value={contactInfo}
                  onChange={this.handleChange}
                />
                <button
                  className="popup__button"
                  onClick={this.sendContact}
                >
                  {contactButtonText}
                </button>
              </div>
              <p className="popup__no-spam-label">No spam, we hate it more than you do.</p>
            <div
              className="popup__loading"
              style={ (loading) ? {} : hiddenStyle }
            >
              <div className="form__progress">
                <div className="form__indeterminate"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <Element name="applyNowScrollTo"></Element>
        <h2 className="section-header">
          Get Pre-Qualified
        </h2>
        <h4 className="section-subheader photo-apply__subheader-first">
          Apply with just a photo of your <span className="no-break">bail receipt</span>.
        </h4>
        <h4 className="section-subheader photo-apply__subheader-second">
          There's no obligation, and you'll receive a decision in minutes. <br />
        </h4>
        <img
          src={this.state.src}
          className="photo-apply__frame"
        />
        <div
          className="photo-apply__loading"
          style={ (loading && !uploaded) ? {} : hiddenStyle }
        >
          <div className="form__progress">
            <div className="form__indeterminate"></div>
          </div>
        </div>
        <div className="photo-apply__button-container">
          <label
            onClick={this.handleClick}
            className={`
            photo-apply__upload-button
            ${(uploaded && !submitted) ? 'photo-apply__button-blue' :
              'photo-apply__button-green'}
            `}>
          {text}
          <input
            className="photo-apply__input"
            disabled={submitted}
            type="file"
            accept="image/*"
            capture="camera"
            id="camera"
            onChange={this.handleImage}
          />
        </label>
        <p className="photo-apply__no-receipt-text">{subtext}</p>
      </div>
      </div>
    )
  }
}

