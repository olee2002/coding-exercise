import React, {Component} from 'react';

import Card from './components/Card'
import Header from './components/Header'
import Pagination from './components/Pagination'

import importedData from './data/UIE-InterviewProject.json'
import './styles/style.css';

class App extends Component{
  
   state = {
      data : importedData,
      paginate: false,
      page: 1,
      limit: 5,
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.page !== this.state.page) {
         this.paginatedData()
      }
   }

    
   handleSort= key => {
         //sort the source data
         const sortedData = importedData.sort((a, b)=>{
            if(a[key] < b[key]) { return -1; }
            if(a[key] > b[key]) { return 1; }
            return 0;
        })
       this.setState({data: sortedData, paginate:false})
   }

    //pagination
    getPaginationPage = (page, arrowPage) => {
      this.setState({ page, arrowPage })
   }

   paginatedData = () => {
      const { limit, page } = this.state
      this.setState({data: importedData.slice((page-1)*limit,limit*page)})
   }

   handlePaginate=()=>{
      const { limit } = this.state
      this.setState({
         data: importedData.slice(0,limit), 
         paginate: !this.state.paginate
      })
   }

  render(){
   const { data, page, limit, paginate } = this.state
   return (
      <>
         <Header handleSort={this.handleSort}/>
         <div className="container">
            {data && data.length>0 && data.map((info, i)=><Card key={i} data = {info}/>)}
         </div>
         <Pagination 
            count={importedData.length}
            page={page}
            onChangePage={this.getPaginationPage}
            paginate={paginate}
            handlePaginate={this.handlePaginate}
            limit={limit}
         />
     </>
   );
  }
}

export default App;
