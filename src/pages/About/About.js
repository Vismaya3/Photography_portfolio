import React from 'react'
import './about.css'
import ME from '../../assests/me.jpg'
import Logo_1 from "../../assests/Logo_1.png"

function About() {
 
  return (
 <section id="about">
  <div className="abouthead">
      <div className="head">
        About me
      </div>
        <div className="logo">
          <img className="logoimg" src={Logo_1} alt=" "/>
        </div>
      </div>
  <div className="words">
    <div className="container header_container">
      
      <h3 className="hello">Hello,my name is <span className="prasad">prasad</span></h3>
      <h1 className="pp">i'm a very Passionate <span className="typing">Photographer</span></h1>
      <h3 className="textcap">How would i describe my style?<br/>Candid,Vibrant,and romantic.<br/>I want you to look on your big day and feel that anticipation of walking down the aisle,the pure joy of the first kiss, and the Love of family and friends that surronds you at your memorable day.The most meaningful photos come from the heart.it's your heart and my heart.Please come to me as you are.Tell me wht love means to you,tell me all the obstacles life throw at you .Tell me so i can photograph you and everything that is imporatnt to you.Tell me so i can capture momments that are priceless and true to your heart.</h3>
      {/*<CTA/>*/}
    </div>
      
    <div className="me">
      <img src={ME} alt=" "/>
    </div>
    
     
    </div>

 </section>
  )
}

export default About