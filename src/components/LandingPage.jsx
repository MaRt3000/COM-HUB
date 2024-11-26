import React from 'react'

import HeroCarousel from './HeroCarousel'
import AboutUsSection from './AboutUsSection'
import { BecomeAVolunteer } from './BecomeAVolunteer'
import { Events } from './Events'
import { OurServices } from './OurServices'
import { Testimonies } from './Testimonies'
import Footer from './Footer'
import AboutFocus from './AboutComponents/AboutFocus'
import AboutTouch from './AboutComponents/AboutTouch'




export const LandingPage = () => {
  return (
    <div>
        {/*} <Header />*/}
        <HeroCarousel />
        <AboutUsSection />
      <AboutFocus />
        <BecomeAVolunteer />
        <OurServices />
        <Events />
        <Testimonies />
        <AboutTouch />
        <Footer />
    </div>
  )
}
