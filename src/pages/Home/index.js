import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar';
import CallToAction from '../../components/CallToAction';
import HowWorks from '../../components/HowWorks';
import ApplyNow from '../../components/ApplyNow';

export default function Home() {
  return (
    <div>
      <Navbar />
      <CallToAction />
      <HowWorks />
      <ApplyNow />
    </div>
  )
}
