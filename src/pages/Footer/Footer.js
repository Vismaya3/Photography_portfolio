import React from 'react'
import './footer.css'
import {SiWhatsapp} from 'react-icons/si'
import {GrInstagram} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from "react-router-dom";
const Footer = () => {
  
  return (
    <footer>
      <a href="#" className='footer__logo'>Prasad Photography📸</a>
      <ul className='permalinks'>
        <li><Link to="/wedding">Wedding</Link></li>
        <li><Link to="/prewedding">Prewedding</Link></li>
        <li><Link to="babyshower">Baby shower</Link></li>
        <li><a href="#services">Portfolio</a></li>
        <li><a href="#portfolio">Babyshoot</a></li>
        <li><a href="#testnomials">Testnomials</a></li>
        <li><a href="#contact">Contact</a></li>
        

      </ul>
      <div className="footer__socials">
        <a href="https://api.whatsapp.com/send/?phone=7019622523&text&type=phone_number&app_absent=0"><SiWhatsapp size={30}/></a>
        <a href="https://www.instagram.com/prasad_photography00/?igshid=YmMyMTA2M2Y="><GrInstagram size={30}/></a>
        <a href="mailto:prasadphotography523@gmail.com"><AiOutlineMail size={35}/></a>
      </div>
      <div>
        <small>&copy;EGator tutorials.All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer