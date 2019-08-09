import React from 'react';

import Card from './components/Card'

import data from './data/UIE-InterviewProject.json'
import './styles/style.css';

function App() {
  return (
    <div className="App">
      {data.map((info, i)=><Card key={i} data = {info}/>)}
    </div>
  );
}

export default App;
