

import React from 'react'

function Card(props) {
  return (
    <div className="card">
        <div className="card-image">
            <img src={props.img}/>
        </div>
        <div className="social-icons">
            
        
        <div className="details">
            <h2>{props.theme}<span className="caption">{props.caption}</span></h2>
        </div>
    </div>
    </div>
  )
}

export default Card