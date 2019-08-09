import React from 'react'

export default function Card({ data }) {
   console.log('cardData', data)
   return (
      <div className='card'>
         {data && data.showBridge ? 
         <img src='http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg'/> 
         :  
         <div className='image'></div>}
        
         <div className='card-content'>

         </div>
      </div>
   )
}

