import React from 'react';
import Scroll from 'react-scroll';
import './styles.css';

const Link = Scroll.Link;


export default function TermsBanner() {
  return (
    <div className="terms-banner">
      <div className="terms-banner__headers-container">
        <h2 className="section-header">
          Fund your present
        </h2>
        <p className="terms-banner__subheader">
          We provide fast, transparent bail refunds in NYC.
          <br />
          No jargon, no hidden fees, just one simple process at a fair rate.
        </p>
      </div>
      <div className="terms-banner__box-container">
        <div className="terms-banner__box">
          <p className="terms-banner__box-label">Payments</p>
          <p className="terms-banner__box-text">Up to $5 Thousand</p>
        </div>
        <div className="terms-banner__box">
          <p className="terms-banner__box-label">One low fee</p>
          <p className="terms-banner__box-text">5%</p>
        </div>
        <div className="terms-banner__box">
          <p className="terms-banner__box-label">Paid out</p>
          <p className="terms-banner__box-text">Same day</p>
        </div>
      </div>
      <Link
        to="applyNowScrollTo"
        smooth={true}
        offset={-50}
        duration={500}
        delay={100}>
        <button
          className="terms-banner__button">
          Get pre-qualified
        </button>
      </Link>
    </div>
  )
}

