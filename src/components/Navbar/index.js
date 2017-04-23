import React from 'react';
import './styles.css';
import BailRefundLogoSvg from './BailRefundLogoSvg';
import SwooshSvg from './SwooshSvg';

export default function Navbar() {
  return (
    <div className="navbar container">
      <div className="navbar__brand">
        <SwooshSvg />
        <p className="navbar__brand__text">BailRefund<span className="navbar__brand__text-light">.com</span></p>
      </div>
      <div className="navbar__filler">
      </div>
      <div className="navbar__location">
        <p>Serving New York City</p>
      </div>
    </div>
  )
}
