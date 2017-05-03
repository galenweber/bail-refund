import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';
import SwooshSvg from './SwooshSvg';
import imgSrc from 'url-loader?limit=10000!./cash-stacks.png';

const Link = Scroll.Link;

export default function CallToAction() {

  return (
    <div className="call-to-action container">
      <div className="flex-left">
        <div className="call-to-action__text-container">
          <h1>Get your bail refund. <span className="no-break">8 weeks</span> faster.</h1>
          <h2>Whether the case just started or just closed, all you need to qualify is a photo of your <span className="no-break">bail receipt</span>.</h2>
          <Link
            to="applyNowScrollTo"
            smooth={true}
            offset={-50}
            duration={500}
            delay={100}>
            <button
              className="call-to-action__button">
              Get Pre-Qualified
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-right">
        <div className="flex-filler" />
        <img
          alt="NYC Bail Refund Money In Stacks of Cash, No Check"
          className="call-to-action__img"
          src={imgSrc}
        />
      </div>
    </div>
  )
}
