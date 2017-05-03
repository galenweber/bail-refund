import React from 'react';
import './styles.css';
import SwooshSvg from './SwooshSvg';

export default function Navbar() {
  return (
    <div className="navbar container">
      <div className="navbar__brand">
        <SwooshSvg />
        <h2 className="navbar__brand__text">BailRefund<span className="navbar__brand__text-light">.com</span></h2>
      </div>
      <div className="navbar__filler">
      </div>
      <div className="navbar__location">
        <h2>Serving New York City</h2>
      </div>
    </div>
  )
}
