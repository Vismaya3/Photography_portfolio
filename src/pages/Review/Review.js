import React from 'react'
import './review.css'
import IMG1 from '../../assests/1.jpg'
import IMG2 from '../../assests/2.jpg'
import IMG3 from '../../assests/3.jpg'
import IMG4 from '../../assests/4.jpg'
import IMG5 from '../../assests/5.jpg'
import IMG6 from '../../assests/6.jpg'
import IMG7 from '../../assests/7.jpg'

function Review() {
   
  return (
    <section id="reviewsec">
    <div className="review">
        <div className="revhead">
            Some Kind Words
        </div>
        <div className="revflex-1">
            <div className="revimg-1">
                <img src={IMG1} alt="img" loading="lazy" />
            </div>
            <div className="revwords-1">
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio excepturi earum necessitatibus quam ipsum ut in recusandae veritatis id labore, unde distinctio officia eveniet maxime delectus aut nam deleniti cum asperiores!</p>
            </div>

        </div>
        <div className="revflex-2">
        <div className="revwords-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio excepturi earum necessitatibus quam ipsum ut in recusandae veritatis id labore, unde distinctio officia eveniet maxime delectus aut nam deleniti cum asperiores!</p>
            </div>
            <div className="revimg-2">
                <img src={IMG2} alt="img" loading='lazy'/>
            </div>
           

        </div>
        <div className="revflex-1">
            <div className="revimg-1">
                <img src={IMG1}/>
            </div>
            <div className="revwords-1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio excepturi earum necessitatibus quam ipsum ut in recusandae veritatis id labore, unde distinctio officia eveniet maxime delectus aut nam deleniti cum asperiores!</p>
            </div>

        </div>
        <div className="revflex-2">
        <div className="revwords-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio excepturi earum necessitatibus quam ipsum ut in recusandae veritatis id labore, unde distinctio officia eveniet maxime delectus aut nam deleniti cum asperiores!</p>
            </div>
            <div className="revimg-2">
                <img src={IMG2}/>
            </div>
           

        </div>
    </div>

    </section>
  )
}

export default Review