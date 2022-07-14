import React,{useState} from 'react';
import Images from './Prewedimages';
import './Prewedding.css';
import {AiFillCloseSquare} from 'react-icons/ai'



const Prewedding=(props)=> {
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
   Prewedding💕
   </div>
    <div className={model?"model open":"model"}>
      <img src={TempImgSrc}/>
      <AiFillCloseSquare onClick={()=>setModel(false)} />
    </div>
    <div className="gallery">
      {Images.map((Images,index)=>{
        return(
          <div className="pics" key={index} onClick={()=>getImg(Images.imgSrc)}>
            <img src={Images.imgSrc} style={{width:'100%'}}/>

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

export default Prewedding