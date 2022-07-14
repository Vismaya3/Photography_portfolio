import React from 'react'
import SliderImage from './pages/Slider/Slider'
import './pages/Slider/Css/App.css'

function Imageapp() {
    return(
  <div className='conatiner mt-5 carousel'>
    <h1 className='slider_title'>
        Gallery
    </h1>
    <SliderImage/>
  </div>



  )
}

export default Imageapp