import React, { useEffect } from 'react'
import Landingpage from './Pages/Landingpage'
import Gallery from './Pages/Gallery'
import Footer from './Pages/Footer'
import Testimonials from './Pages/Testimonials'
import Portfolio from './Pages/Portfolio'
import Lenis from 'lenis'


const App = () => {

      useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);
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