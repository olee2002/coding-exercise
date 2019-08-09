
import React, { Component } from 'react'

export default class Pagination extends Component {
   state = {
      total: 23,
      selected: false,
      limit: 6,
      boxes: [],
      currentPage: 0,
   }

   componentDidMount() {
      this.showBoxes()
      const { limit } = this.props
      if (limit) {
         this.setState({ limit })
      }
   }

   selectedItem = index => {
      this.setState({ selected: true, index })
   }
   showBoxes = (count, limit) => {
      const check = count / limit
      const round = Math.round(count / limit)
      const numOfPageBoxes = check > round ? round + 1 : round
      const boxes = []
      for (let i = 1; i <= numOfPageBoxes; i++) {
         boxes.push(i)
      }
      return boxes
   }

   render() {
      const { limit, currentPage } = this.state
      const { count, onChangePage, handleArrows, page } = this.props
      const maxPage = Math.ceil(count / limit)
      const currentlyAtMax = maxPage === page
      return (
         <div className='flex-column flex-end w100 mt10'>
         <div className='flex-wrap flex-end w100 mb10'>
            <span className='flex ml10' style={boxStyleOutline}>
               <span
                  className='fa fa-chevron-left'
                  onClick={
                     page === 1
                        ? () => {}
                        : async () => {
                             await handleArrows('forward')
                             await this.setState({
                                currentPage: currentPage - 1,
                             })
                          }
                  }
               />
            </span>
            {this.showBoxes(count, limit).map((item, i) => (
               <div
                  key={i}
                  className='flex ml5 cell'
                  onClick={() => {
                     onChangePage(item)
                     this.setState({ currentPage: i })
                  }}
                  style={i === currentPage ? boxStyle : boxStyleOutline}>
                  {item}
               </div>
            ))}
            <span className='flex ml5' style={boxStyleOutline}>
               <span
                  className='fa fa-chevron-right'
                  onClick={
                     currentlyAtMax
                        ? () => {}
                        : async () => {
                             await this.setState({
                                currentPage: currentPage + 1,
                             })
                             await handleArrows('backward')
                          }
                  }
               />
            </span>
         </div>
         </div>
      )
   }
}

const boxStyle = {
   marginTop: 10,
   backgroundColor: '#204497',
   color: '#fff',
   width: 35,
   height: 35,
   borderRadius: 3,
   cursor: 'pointer',
}
const boxStyleOutline = {
   marginTop: 10,
   backgroundColor: '#fff',
   border: '1px solid #DBDBDB',
   color: '#C5C5C5',
   width: 35,
   height: 35,
   borderRadius: 3,
   cursor: 'pointer',
}
