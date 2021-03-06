import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import {Link} from "react-router-dom";


export default function Slider(props) {
    document.title=props.title;

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    

    return (
        <section id="services">
        < >
        <div className="header2">
            <h1>Services : There is not a single moment our camera will miss 🤝</h1><br/>
            
        </div>
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <>
                        <div
                            key={obj.id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                             
                            <Link to={obj.path}>
                                
                                
                            <img
                                src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpeg`} 
                            >    
                          </img>
                          </Link>
                          
                        </div>
                    </>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>

                ))}
            </div>
            
        </div>
        <div className="caption">
        {dataSlider.map((obj, index) => {
            return (
                <>
                    <div 
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            
                        <h3 className='title'>{obj.title}<span className='subtitle'><h2>{obj.subTitle}</h2></span></h3>
                        
                    </div>
                </>
            )
        })}
        
        </div>
        </>
        </section>  
    )
}
