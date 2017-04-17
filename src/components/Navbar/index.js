import React from 'react';
import './styles.css';
import BailRefundLogoSvg from './BailRefundLogoSvg';

export default function Navbar() {
  return (
    <div className="navbar container">
      <div className="navbar__brand">
        <BailRefundLogoSvg />
        <p className="navbar__brand__text">BailRefund.com</p>
      </div>
      <div className="navbar__filler">
      </div>
      <div className="navbar__location">
        <p>Serving New York City</p>
      </div>
    </div>
  )
}
