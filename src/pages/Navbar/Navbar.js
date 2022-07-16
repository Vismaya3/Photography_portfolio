import React from 'react';
import './navbar.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaImages} from 'react-icons/fa'
import {BsInfoSquareFill} from 'react-icons/bs'
import {MdContactPhone} from 'react-icons/md'
//import {MdOutlineMessage} from 'react-icons/md'
import {MdReviews} from 'react-icons/md'


const Nav = () => {
  /*const[activeNav,setActiveNav]=useState('#')*/
  return (
    <nav>
      <a href=" "><AiTwotoneHome size={25}/></a>
      <a href="#services" /*onClick={()=>secActiveNav('#about')} className={actively=== '#about'? 'active':' '}*/><FaImages size={25}/></a>
      <a href="#about" /*onClick={()=>secActiveNav('#experience')} className={actively=== '#experinece'? 'active':' '}*/><BsInfoSquareFill size={25}/></a>
      <a href="#contact"/* onClick={()=>secActiveNav('#services')} className={actively=== '#services'? 'active':' '}*/><MdContactPhone size={25}/></a>
      <a href="#reviewsec"/* onClick={()=>secActiveNav('#contact')} className={actively=== '#contact'? 'active':' '}*/><MdReviews size={25}/></a>  
   {/* /<a href="#contact"/><MdOutlineMessage size={25}/></a>*/}
      
    </nav>
  )
}

export default Nav