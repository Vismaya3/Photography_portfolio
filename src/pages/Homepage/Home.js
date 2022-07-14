import React from 'react'
import IMG2 from '../../assests/1.jpg'
import './home.css'
import prasad_photography from '../../assests/prasad_photography.pdf'
import HeaderSocials from './HeaderSocials'


function Homepage() {

  return (
    
    <section className="home">

    
  
    <div className="homepage">
    
    {/*<div className="homelogo">
    <img src={IMG1} alt=" "/>
  </div>*/}
  {/*<nav class="navbar bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>

</nav>*/}
    <div className="both">
    <div className="both2">
    <img className="homesideimg" src={IMG2} alt=" "/>
    </div>
    <div className="both1">
    <div className="start">
     {/*} <h1>
        <span></span>
        <div className="message">
          <div className="word1">Animations</div>
          <div className="word2">Video</div>
          <div className="word3">Photo </div>
          
        </div>
</h1>*/}
    </div>
    <div> 
      <h1 className="homehead">
   
    <h1 >PRASAD PHOTOGRAPHY📸</h1>

  {/* <span>p</span>
  <span>h</span>
  <span>o</span>
  <span>t</span>
  <span>o</span>
  <span>g</span>
  <span>r</span>
  <span>a</span>
  <span>p</span>
  <span>h</span>
  <span>y</span> */}

    </h1>
    <div className="caption">
    <h4 className="captiontext">
      <br/>
    <span className="homecaption homecaption-9">Tell </span>
    <span className="homecaption homecaption-10">Me </span>
    <span className="homecaption homecaption-12">Your</span>
    <span className="homecaption homecaption-13">Story </span>
    <br/>
    <span className="homecaption homecaption-1">... </span>
    <span className="homecaption homecaption-2">And  </span>
    <span className="homecaption homecaption-3">I </span>
    <span className="homecaption homecaption-8"> Will</span>
    <span className="homecaption homecaption-4">Tell </span>
    <span className="homecaption homecaption-5">It </span>
    <span className="homecaption homecaption-6">Back</span>
    <span className="homecaption homecaption-7">To </span>
    <span className="homecaption homecaption-8">You </span>
    <span className="homecaption homecaption-14">Via </span>
    <span className="homecaption homecaption-15">Photographs </span>
    </h4>
    </div>
    <div className="buttons">
    <div class="button1">
        <a href= {prasad_photography} download className='btn' >Packages</a>
        
       {/*} <a href="#contact" className='btn btn-primary' >Bookings</a>*/}
    </div>
    <div class="button1">
        <a href="" className='btn' >Dive In</a>
        
       {/*} <a href="#contact" className='btn btn-primary' >Bookings</a>*/}
    </div>
    </div>
    <HeaderSocials/>
    
    

    
    </div>
    </div>
    </div>
 
   {/* <Footer/>

<Nav/>*/}
    </div>
    </section>
    
    
  )
}

export default Homepage

