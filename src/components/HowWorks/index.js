import React from 'react';
import './styles.css';

export default function() {
  return (
    <div className="how-works container">
      <h2 className="section-header">How it works</h2>
      <p className="how-works__subheader">Apply in &#60;1 min</p>
      <p className="how-works__body">Apply with just your phone number, the status of the case, and court city.</p>
      <hr className="how-works__divider"/>
      <p className="how-works__subheader">Schedule an appointment</p>
      <p className="how-works__body">If approved, we'll schedule a time for you to visit our Lower Manhattan office.</p>
      <hr className="how-works__divider"/>
      <p className="how-works__subheader">Collect your cash refund</p>
      <p className="how-works__body">Pick up your cash payment and leave your NYC cash bail receipt with us.</p>
      <hr className="how-works__divider"/>
    </div>
  )
}
