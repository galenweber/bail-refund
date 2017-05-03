import React from 'react';
import './styles.css';
import imgSrc from 'url-loader?limit=10000!./bail-receipt.jpg';

export default class PhotoApply extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      src: imgSrc,
    };

    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(e) {
    var file = e.target.files[0];
    // Do something with the image file.
    this.setState({ src: URL.createObjectURL(file) });


    var formData = new FormData();
    formData.append('photo', file);

    const emailPromise = fetch('/api/email/photo', {
      method: 'POST',
      body: formData,
    });

  }

  render() {

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
          src={this.state.src}
          className="photo-apply__frame"
        />
        <div className="photo-apply__button-container">
        <label className="photo-apply__upload-button">
          Upload Receipt Photo
          <input
            className="photo-apply__input"
            type="file"
            accept="image/*"
            capture="camera"
            id="camera"
            onChange={this.handleImage}
          />
        </label>
        <p className="photo-apply__no-receipt-text">(No receipt? Complete a manual application here.)</p>
      </div>
      </div>
    )
  }
}

