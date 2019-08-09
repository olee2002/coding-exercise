import React, {Component} from 'react';

import Card from './components/Card'
import Header from './components/Header'
import Pagination from './components/Pagination'

import importedData from './data/UIE-InterviewProject.json'
import './styles/style.css';

class App extends Component{
   state = {
      data : importedData,
      page: 1,
      limit: 5,
   }
   componentDidMount(){
      const { page, limit} = this.state
      this.setState({data: importedData.slice(0,limit)})
   }


   componentDidUpdate(prevProps, prevState) {
      if (prevState.page !== this.state.page) {
         this.paginatedData()
      }
   }

    //pagination
    getPaginationPage = (page, arrowPage) => {
      this.setState({ page, arrowPage })
   }

   paginatedData = () => {
      const { data, limit, page } = this.state
      
      
      // this.setState({ paginatedData })
   }
 
   handleSort= key => {
      const { data } = this.state
         const sortedData = data.sort((a, b)=>{
            if(a[key] < b[key]) { return -1; }
            if(a[key] > b[key]) { return 1; }
            return 0;
        })
       this.setState({data: sortedData})
   }
  render(){
   const { data, page, limit } = this.state
   return (
      < div className='main'>
    <Header handleSort={this.handleSort}/>
     <div className="container">
       {data && data.length>0 && data.map((info, i)=><Card key={i} data = {info}/>)}
     </div>
     <Pagination 
     count={importedData.length}
     page={page}
     onChangePage={this.getPaginationPage}
     limit={limit}
     />
     </div>
   );
  }
}

export default App;
