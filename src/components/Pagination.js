import React, { Component } from 'react'

export default class Pagination extends Component {

   state = {
      total: 12,
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

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.paginate !== this.props.paginate) {
      this.setState({currentPage: 0})
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
      const { count, onChangePage, paginate, handlePaginate, handleDefaultData } = this.props

      return (
         <div className='pagination'>
            <div className='git'>
               <a href='https://github.com/olee2002/coding-exercise' title="hithub" target="_blank">
                  <img src='images/github.png' className='icon' alt="" />
               </a>
            </div>
            <div className='git' onClick={handleDefaultData} title="home">
               <img src='images/home.png' className='icon' alt="" />
            </div>

            {paginate ? this.showBoxes(count, limit).map((item, i) => (
               <div
                  key={i}
                  onClick={() => {
                     onChangePage(item)
                     this.setState({ currentPage: i })
                  }}
                  style={i === currentPage ? boxStyle : boxStyleOutline}>
                  {item}
               </div>
            )) 
            : 
            <button className='btn btn-primary' onClick={handlePaginate}>Paginate</button>
            }
         </div>
      )
   }
}

const boxStyle = {
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   marginTop: 10,
   backgroundColor: '#204497',
   color: '#fff',
   width: 35,
   height: 35,
   borderRadius: 3,
   margin: 5,
   cursor: 'pointer',
}
const boxStyleOutline = {
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   marginTop: 10,
   backgroundColor: '#fff',
   border: '1px solid #DBDBDB',
   color: '#C5C5C5',
   width: 35,
   height: 35,
   margin: 5,
   borderRadius: 3,
   cursor: 'pointer',
}
