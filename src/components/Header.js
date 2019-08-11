import React from 'react'

export default function Header({ handleSort }) {

   const buttonStyle = 'btn btn-primary m-1'

   return (
      <div className='header'>
            <div>
               <h6>Sort By: </h6>
               <div>
               <button className={buttonStyle} onClick={()=>handleSort('Heading')}>Heading</button>
               <button className={buttonStyle} onClick={()=>handleSort('Subheading')}>Sub Heading</button>
               <button className={buttonStyle} onClick={()=>handleSort('Price')}>Price</button>
               </div>
            </div>
      </div>
   )
}
