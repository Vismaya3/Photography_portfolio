import React,{useState} from 'react';
import Images from './Babyshootimg';
import './BabyShoot.css';
import {AiFillCloseSquare} from 'react-icons/ai'



const Babyshoot=(props)=> {
  document.title=props.title;
    const[model,setModel]=useState(false);
    const [TempImgSrc,setTempImgSrc]=useState('');
    const getImg=(imgSrc)=>{
      setTempImgSrc(imgSrc);
      setModel(true);
    }
    
    
  return (
    <>
   <div className="start">
    BabyShoot👶
   </div>
    <div className={model?"model open":"model"}>
      <img alt=" " src={TempImgSrc}/>
      <AiFillCloseSquare onClick={()=>setModel(false)} />
    </div>
    <div className="gallery">
      {Images.map((Images,index)=>{
        return(
          <div className="pics" key={index} onClick={()=>getImg(Images.imgSrc)}>
            <img key={index+1} src={Images.imgSrc} alt=" " style={{width:'100%'}}/>

          </div>
        )
      })}
      
    </div>
    <a href='https://www.instagram.com/prasad_photography00/?igshid=YmMyMTA2M2Y='>
    <button class="button button4">MORE</button>
    </a>
    </>
  )
}

export default Babyshoot