import React from 'react'

export default function Header({handleSort}) {
   return (
      <div className='header'>
            <h6>Sort By: </h6>
            <button 
            className='btn btn-primary m-1'
            onClick={()=>handleSort('Heading')}
            >Heading</button>
            <button 
            className='btn btn-primary m-1'
            onClick={()=>handleSort('Subheading')}
            >Sub Heading</button>
            <button 
            className='btn btn-primary m-1'
            onClick={()=>handleSort('Price')}
            >Price</button>
      </div>
   )
}
