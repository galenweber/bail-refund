import React from 'react';
import './styles.css';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

export default function FaqBanner() {
  return (
      <div className="faqbanner container">
        <h2 className="section-header">
          Frequently Asked Questions
        </h2>
        <div className="faqbanner__flexcontainer">
          <div className="faqbanner__flexleft">
            <h3 className="faqbanner__p-q">
              What is the cost to use BailRefund?
            </h3>
            <p className="faqbanner__p-a">
              We pay 95% of your bail receipt's face value. Use our &nbsp;
              <span className="faqbanner__link"><Link
                to="livePayoutScrollTo"
                smooth={true}
                offset={-50}
                duration={500}
                delay={100}
              >
                Payout Calculator
            </Link></span>
               &nbsp; to find out what you can receive for your bail receipt.
            </p>
          </div>
          <div className="faqbanner__flexright">
            <h3 className="faqbanner__p-q">
              Is the money I receive from BailRefund a loan?
            </h3>
            <p className="faqbanner__p-a">
              No! The money you receive from us is yours to keep. You will transfer ownership of your bail receipt, and we will collect payment from the city.
            </p>
          </div>
        </div>
        <div className="faqbanner__flexcontainer">
          <div className="faqbanner__flexleft">
            <h3 className="faqbanner__p-q">
              What if the case is still ongoing?
            </h3>
            <p className="faqbanner__p-a">
              That's totally fine! Many of our clients get pre-approved while the case is ongoing and receive their cash payment as soon as the case ends.
            </p>
          </div>
          <div className="faqbanner__flexright">
            <h3 className="faqbanner__p-q">
              Can we complete everything online?
            </h3>
            <p className="faqbanner__p-a">
              Unfortunately an in-person meeting at our offices is necessary to provide the cash payment. We are hoping to provide an entirely online process soon.
            </p>
          </div>
        </div>
      </div>
  );
}
