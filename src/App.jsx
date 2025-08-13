import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Landing from './Component/landing'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
import Problems from './Component/Problems'
import SaaSModel from './Component/SaaSModel'
import Features from './Component/Features'
import HowItWorks from './Component/HowItWorks'
import ComingSoon from './Component/CommingSoon'
import CTA from './Component/CTA'
import Footer from './Component/Footer'


function App() {
  return<div className="min-h-screen bg-slate-900 font-sans">
    <Nav />
      <Hero />
      <Problems />
      <SaaSModel />
      <Features />
      <HowItWorks />
      <ComingSoon />
      <CTA />
      <Footer />
  </ div>
}

export default App
