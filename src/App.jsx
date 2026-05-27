import React from 'react'
import Landingpage from './Pages/Landingpage'
import Gallery from './Pages/Gallery'
import Footer from './Pages/Footer'
import Testimonials from './Pages/Testimonials'
import Portfolio from './Pages/Portfolio'

const App = () => {
  return (
    <div>
      <Landingpage/>
      <Gallery/>
      <Testimonials/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App