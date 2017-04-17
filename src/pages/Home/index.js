import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';
import Navbar from '../../components/Navbar';
import CallToAction from '../../components/CallToAction';
import HowWorks from '../../components/HowWorks';
import ApplyNow from '../../components/ApplyNow';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bail Refund - We Pay Cash for NYC Bail Refund Receipts</title>
        <meta name="description" content="We pay cash for bail refund receipts. Receive up to $5,000 for your NYC cash bail receipt. Same day payment available. Over 95% approval rate." />
      </Helmet>
      <Navbar />
      <CallToAction />
      <HowWorks />
      <ApplyNow />
    </div>
  )
}
