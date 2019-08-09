import React from 'react'

export default function Card({ data }) {

   const upperCase = string=>{
      const strArr = string.split(' ')
      const strArrCopy = strArr.map(str=>str.charAt(0).toUpperCase() + str.slice(1))
      return strArrCopy.join(' ')
   }

   Number.prototype.format = function(n, x) {
      var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
      return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };

   return (
      <div className='card'>
         {data && data.showBridge ? 
         <img 
         src='http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg'
         alt='bridge image'
         /> 
         :  
         <div className='place-holder'>
            <img 
         src='http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png'
         alt='placeholder'
         /> 
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

