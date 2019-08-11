import React from 'react'

import { upperCase } from '../utils'

export default function Card({ data }) {

   const bridgeImage = 'http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg'
   const placeholder = 'http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png'

   return (
      <div className='card'>
         {data && data.showBridge ? 
         <img src={bridgeImage} alt='bridge image'/> 
         :  
         <div className='place-holder'>
            <img src={placeholder} alt='placeholder'/> 
         </div>} 
         <div className='card-content'>
            <div className='sub-content'>
               <h5 className='heading'>{upperCase(data.Heading)}</h5>
               <p className='subheading'>{upperCase(data.Subheading)}</p>
            </div>
            <div className='price'>
               <h5 >${data.Price.format()}</h5>
            </div>
         </div>
      </div>
   )
}

