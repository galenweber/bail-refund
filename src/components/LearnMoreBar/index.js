import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';
import DownArrowSvg from './DownArrowSvg';

const Link = Scroll.Link;

export default function() {
  return (
    <div className="learn-more-bar">
      <Link
        to="applyNowScrollTo"
        smooth={true}
        offset={-50}
        duration={500}
        delay={100}>
        Learn More
        <DownArrowSvg />
      </Link>
    </div>
  )
}
