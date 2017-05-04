import React from 'react';
import './styles.css';
import imgSrc from 'url-loader?limit=10000!./bail-receipt.jpg';
import submittedImgSrc from 'url-loader?limit=10000!./submitted-graphic.jpg';
import thumbnailer from './thumbnailer';

export default class PhotoApply extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      src: imgSrc,
      uploaded: false,
      submitted: false,
      loading: false,
      text: 'upload receipt photo',
      id: this.id(),
    };

    this.handleImage = this.handleImage.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    const { uploaded, id } = this.state;
    if (uploaded) {
      e.preventDefault();
      this.setState({
        text: 'submitting receipt',
      });
      const emailPromise = fetch('/api/email/photo', {
        method: 'POST',
        body: { text: id }
      })
      .then((res) => {
        this.setState({
          loading: false,
          src: submittedImgSrc,
          submitted: true,
          text: 'submitted!'
        });
      });
    }
  }

  handleImage(e) {
    this.setState({ loading: true });

    const { uploaded, id } = this.state;


    const file = e.target.files[0];

    const image = new Image();

    image.onload = function() {
      var canvas = document.createElement("canvas");
      new thumbnailer(canvas, image, 188, 3); //this produces lanczos3
      // but feel free to raise it up to 8. Your client will appreciate
      // that the program makes full use of his machine.
      console.log('canvas url ', canvas.toDataURL());
    }

    image.src = URL.createObjectURL(file);


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

    const { loading, text, uploaded, submitted } = this.state;

    const hiddenStyle = { visibility: 'hidden' };

    let subtext = '(No receipt? Complete a manual application here.)';

    if (uploaded && !submitted) subtext = 'Tap to submit your receipt for review';
    if (uploaded && submitted) subtext = 'Success! We will reach out soon';

    return (
      <div className="photo-apply container">
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
          id="image-element"
          src={this.state.src}
          className="photo-apply__frame"
        />
        <div
          className="photo-apply__loading"
          style={ (loading) ? {} : hiddenStyle }
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

