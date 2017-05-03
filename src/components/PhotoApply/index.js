import React from 'react';
import './styles.css';

export default class PhotoApply extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      src: '',
    };

    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(e) {
    var file = e.target.files[0];
    // Do something with the image file.
    this.setState({ src: URL.createObjectURL(file) });
    var reader = new FileReader();


    reader.onload = function(e) {
      var formData = new FormData();
      formData.append('photo', file);

      const emailPromise = fetch('/api/email/photo', {
        method: 'POST',
        body: formData,
      });
    }

    reader.readAsDataURL(file);

    //var canvas = document.createElement("canvas");
    //context = canvas.getContext('2d');


    //function make_base() {
      //base_image = new Image();
      //base_image.src = imageURL;
      //base_image.onload = function() {
        //context.drawImage(base_image, 255, 330);
        //var jpegUrl = canvas.toDataURL();

        //console.log('jpegUrl is ', jpegUrl);
      //}
    //}

    //make_base();



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

