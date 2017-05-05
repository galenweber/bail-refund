import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

export default class ApplyNow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bailAmount: '',
      defendantName: '',
      closeDate: '',
      phoneNumber: '',
      city: 'initial',
      submitted: false,
      attempt: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      bailAmount,
      defendantName,
      closeDate,
      phoneNumber,
      city
    } = this.state;

    this.setState({ attempt: true });

    if (!bailAmount || !defendantName || !closeDate || !phoneNumber || (city==='initial')) {
      return;
    }

    const html = `Bail Amount: $${Number(bailAmount).toLocaleString()}
      <br> Defendant Name: ${defendantName}
      <br> Case Close Date: ${closeDate}
      <br> Phone Number: ${phoneNumber}
      <br> City: ${city}
    `;

    const emailPromise = fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        html,
        subject: 'Bail Refund Application'
      })
    });

    this.setState({ submitted: true });
  }

  render() {

    const {
      bailAmount,
      defendantName,
      closeDate,
      phoneNumber,
      city,
      submitted,
      attempt,
    } = this.state;

    return (
      <div className="apply-now container">
        <Element name="manualApplyScrollTo"></Element>
        <h2 className="section-header">
          Manual Bail Refund Application
        </h2>
        <h4 className="section-subheader">
          If you have your bail receipt, upload a photo above. If not, complete the form below.
        </h4>
        <form>
          <div className="apply-now__fieldset">
            <label>What is the bail amount?</label>
            <div className="apply-now__input-container">
              <input
                type="number"
                name="bailAmount"
                value={bailAmount}
                onChange={this.handleInputChange}
                className={(attempt && !bailAmount) ? 'input-error' : ''}
              />
            </div>
            <p className="apply-now__error-text">
              {(attempt && !bailAmount) ?
                'Please enter a bail amount' : '\u00A0'}
            </p>
          </div>
          <div className="apply-now__fieldset">
            <label>What is the defendant's name or docket number?</label>
            <div className="apply-now__input-container">
              <input
                type="text"
                name="defendantName"
                value={defendantName}
                onChange={this.handleInputChange}
                className={(attempt && !defendantName) ? 'input-error' : ''}
              />
            </div>
            <p className="apply-now__error-text">
              {(attempt && !defendantName) ?
                'Please enter the defendant\'s name or docket number' : '\u00A0'}
            </p>
          </div>
          <div className="apply-now__fieldset">
            <label>When did the case close?<br /><span className="apply-now__phone-text">(if still ongoing, enter "ongoing")</span></label>
            <div className="apply-now__input-container">
              <input
                type="text"
                name="closeDate"
                value={closeDate}
                onChange={this.handleInputChange}
                className={(attempt && !closeDate) ? 'input-error' : ''}
              />
            </div>
            <p className="apply-now__error-text">
              {(attempt && !closeDate) ?
                'Please enter the date the case closed' : '\u00A0'}
            </p>

          </div>
          <div className="apply-now__fieldset">
            <label>What city was the case in?</label>
            <div className="apply-now__input-container">
              <select
                name="city"
                value={city}
                onChange={this.handleInputChange}
                className={(attempt && (city==='initial')) ? 'input-error' : ''}
              >
                <option value="initial"> -- select an option -- </option>
                <option value="manhattan">Manhattan</option>
                <option value="brooklyn">Brooklyn</option>
                <option value="queens">Queens</option>
                <option value="statenIsland">Staten Island</option>
                <option value="theBronx">The Bronx</option>
              </select>
            </div>
            <p className="apply-now__error-text">
              {(attempt && (city==='initial')) ?
                'Please enter the city for the case' : '\u00A0'}
            </p>
          </div>
          <div className="apply-now__fieldset">
            <label>What is your phone number?<br /><span className="apply-now__phone-text">(used ONLY to communicate your decision)</span></label>
            <div className="apply-now__input-container">
              <input
                type="number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleInputChange}
                className={(attempt && !phoneNumber) ? 'input-error' : ''}
              />
            </div>
            <p className="apply-now__error-text">
              {(attempt && !phoneNumber) ?
                'Please enter your phone number' : '\u00A0'}
            </p>
          </div>
          <button
            onClick={this.onSubmit}
            disabled={submitted}
            className="call-to-action__button">
            {(this.state.submitted) ? 'Submitted!' : 'Get pre-qualified'}
          </button>
        </form>
      </div>
    )
  }
}
