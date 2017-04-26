import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';
import Navbar from '../../components/Navbar';
import CallToAction from '../../components/CallToAction';
import HowWorks from '../../components/HowWorks';
import ApplyNow from '../../components/ApplyNow';
import FaqBanner from '../../components/FaqBanner';
import TermsBanner from '../../components/TermsBanner';
import LivePayout from '../../components/LivePayout';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bail Refund NYC - We Pay Cash for Bail Refund Receipts</title>
        <meta name="description" content="We pay cash for bail refund receipts. Receive up to $5,000 for your NYC cash bail receipt. Same day payment available. Over 95% approval rate." />
      </Helmet>
      <Navbar />
      <CallToAction />
      <HowWorks />
      <LivePayout />
      <ApplyNow />
      <FaqBanner />
      <TermsBanner />
      <Footer />
    </div>
  )
}
