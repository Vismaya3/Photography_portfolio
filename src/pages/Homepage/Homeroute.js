import React from 'react'
import Nav from'../Navbar/Navbar'
import Fillers from '../Fillers/Fillers'
import Filler2 from '../Fillers/Filler2'
import Slider from '../Slider/Slider'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Review from '../Review/Review'
import Footer from '../Footer/Footer'
import Homepage from './Home'

function Homeroute() {
  return (
    <div>
        <Homepage />
        <Nav/>
        <Fillers/>
        <Slider/>
        <Filler2/>
       <About />
      <Filler2/>
      <Contact />
      <Filler2/>
      <Review />
      <Footer />
    </div>
  )
}

export default Homeroute