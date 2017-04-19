import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

class LivePayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bail: '',
      payout: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      bail: e.target.value,
      payout: Math.round(Number(e.target.value)*.95) || 0,
    })
  }

  render() {
    const {
      bail,
      payout,
    } = this.state;

    return (
      <div className="live-payout container">
        <Element name="livePayoutScrollTo"></Element>
        <div>
          <div>
            <h2 className="section-header">
              Live Payout Calculator
            </h2>
            <p className="live-payout__subheader">
              Enter the amount on your bail receipt
              <br /> And get the live quote of your potential payment.
            </p>
          </div>
          <h2 className="global__h2 live-payout__payout">
            ${Number(payout).toLocaleString(
              'en-US',
              { minimumFractionDigits: 2 },
            )}
          </h2>
        </div>
        <div>
          <div>
            <label className="live-payout__bail-label">
              Enter Receipt Amount
            </label>
          </div>
          <input
            className="live-payout__input"
            value={bail}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}

export default LivePayout;

