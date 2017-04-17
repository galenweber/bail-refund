import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';
import MoneySvg from './MoneySvg';

const Link = Scroll.Link;

export default function CallToAction() {

  return (
    <div className="call-to-action container">
      <div className="flex-left">
        <h1>Get Up To $5,000 For Your Bail Refund</h1>
        <p>The city takes over 8 weeks to process and mail bail checks. <br />Don't wait. We pay cash for bail receipts.</p>
        <Link
          to="applyNowScrollTo"
          smooth={true}
          offset={-50}
          duration={500}
          delay={100}>
          <button
            className="call-to-action__button">
            Apply Now
          </button>
        </Link>
      </div>
      <div className="flex-right">
        <div className="filler" />
        <MoneySvg />
      </div>
    </div>
  )
}
