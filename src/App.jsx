import React from 'react'
import AboutUs from './components/AboutComponents/AboutUs'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import GalleryAll from './components/GalleryComponents/GalleryAll'
import { LandingPage } from './components/LandingPage'
import ContactHeader from './components/ContactComponents/ContactAll'
function App() {
  

  return (
    <Routes>
     <Route path='' element={<LandingPage />} />
     <Route path='/LandingPage' element={<LandingPage />} />
     <Route path='/AboutUs' element={<AboutUs />} />
     <Route path='/GalleryAll' element={<GalleryAll />} />
     <Route path='/ContactHeader' element={<ContactHeader />} />

    </Routes>
  )
}

export default App
