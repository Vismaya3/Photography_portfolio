import React from 'react'
import {SiWhatsapp} from 'react-icons/si'
import {GrInstagram} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import './headersocial.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
    <a href="https://api.whatsapp.com/send/?phone=70196 22523&text&type=phone_number&app_absent=0"><SiWhatsapp size={30}/></a>
    <a href="https://www.instagram.com/prasad_photography00/?igshid=YmMyMTA2M2Y="><GrInstagram size={30}/></a>
    <a href="mailto:prasadphotography523@gmail.com"><AiOutlineMail size={35}/></a>
  </div>
  )
}

export default HeaderSocials