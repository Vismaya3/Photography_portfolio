import React from 'react'
import "./Fillers.css"
import {SiWhatsapp} from 'react-icons/si'
import {GrInstagram} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
function Fillers() {
  return (
   <div className="fillers">
    <h2 className='caption'>I love capturing laughter,giggles and lovely memories!<br/>I offer newborn,family,maternity and eventphotography.<br/>if you want anything else let's chat and we can come up with something to fit what you need!</h2>
    <div className="footer__socials">
        <a href="https://api.whatsapp.com/send/?phone=7019622523&text&type=phone_number&app_absent=0"><SiWhatsapp size={30}/></a>
        <a href="https://www.instagram.com/prasad_photography00/?igshid=YmMyMTA2M2Y="><GrInstagram size={30}/></a>
        <a href="mailto:prasadphotography523@gmail.com"><AiOutlineMail size={35}/></a>
      </div>
   </div>
  )
}

export default Fillers