import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';
import MoneySvg from './MoneySvg';
import imgSrc from 'url-loader?limit=10000!./cash-stacks.png';

const Link = Scroll.Link;

export default function CallToAction() {

  return (
    <div className="call-to-action container">
      <div className="flex-left">
        <h1>Get Cash For Your Bail Refund Receipt Today</h1>
        <h2>New York City takes over 8 weeks to <span className="no-break">process and mail bail checks.</span></h2> <h2>Don't wait. We pay up to $5,000 cash for bail receipts.</h2>
        <Link
          to="applyNowScrollTo"
          smooth={true}
          offset={-50}
          duration={500}
          delay={100}>
          <button
            className="call-to-action__button">
            Get pre-qualified
          </button>
        </Link>
      </div>
      <div className="flex-right">
        <div className="filler" />
        <img
          alt="NYC Bail Refund Money In Stacks of Cash, No Check"
          className="call-to-action__img"
          src={imgSrc}
        />
      </div>
    </div>
  )
}
