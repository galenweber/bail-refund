import React from 'react';
import './styles.css';

export default function() {
  return (
    <div className="how-works container">
      <h2 className="section-header">How it works</h2>
      <p className="how-works__subheader">Apply in &#60;1 min</p>
      <p className="how-works__body">Apply with just a photo of your bail receipt and a phone number or email to contact you at.</p>
      <hr className="how-works__divider"/>
      <p className="how-works__subheader">Deposit your receipt via mail or in-person</p>
      <p className="how-works__body">If approved, we'll send an envelop to collect your receipt, or invite you to drop it off at our offices.</p>
      <hr className="how-works__divider"/>
      <p className="how-works__subheader">Collect your cash refund</p>
      <p className="how-works__body">Pickup your cash payment the same day the case ends, or today if the case is over.</p>
      <hr className="how-works__divider"/>
    </div>
  )
}
