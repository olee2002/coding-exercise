import React, {Component} from 'react';

import Card from './components/Card'
import Header from './components/Header'
import Pagination from './components/Pagination'

import importedData from './data/UIE-InterviewProject.json'
import './styles/style.css';

class App extends Component{
   state = {
      data : importedData
   }
   componentDidMount(){
      this.setState({data: importedData})
   }


   componentDidUpdate(){

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
   const { data } = this.state
   return (
      <>
    <Header handleSort={this.handleSort}/>
     <div className="container">
       {data && data.length>0 && data.map((info, i)=><Card key={i} data = {info}/>)}
     </div>
     <Pagination/>
     </>
   );
  }
}

export default App;
