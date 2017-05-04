import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';
import Navbar from '../../components/Navbar';
import CallToAction from '../../components/CallToAction';
import LearnMoreBar from '../../components/LearnMoreBar';
import HowWorks from '../../components/HowWorks';
import ApplyNow from '../../components/ApplyNow';
import PhotoApply from '../../components/PhotoApply';
import FaqBanner from '../../components/FaqBanner';
import TermsBanner from '../../components/TermsBanner';
import LivePayout from '../../components/LivePayout';
import Footer from '../../components/Footer';

export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {src: ''};
  }

  render() {
    const { src } = this.state;
    return (
      <div>
        <Helmet>
          <title>NYC Bail Refund Check | We Pay Cash For Bail Money Receipt</title>
          <meta name="description" content="Don't wait 8 weeks. We pay cash for NYC bail refund receipts. Apply in minutes and receive up to $5,000 the same day. Over 98% of applicants approved." />
        </Helmet>
        <Navbar />
        <CallToAction />
        <LearnMoreBar />
        <HowWorks />
        <LivePayout />
        <PhotoApply />
        <FaqBanner />
        <TermsBanner />
        <ApplyNow />
        <Footer />
      </div>
    )
  }
}
