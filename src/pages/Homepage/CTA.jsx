
import React from 'react'
import prasad_photography from '../assests/prasad_photography.pdf'


const CTA = () => {
   
  return (
    <div className="button">
        <a href= {prasad_photography} download className='btn' >Packages</a>
       {/*} <a href="#contact" className='btn btn-primary' >Bookings</a>*/}
    </div>
  );
}


export default CTA