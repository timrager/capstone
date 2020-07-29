import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <Navbar/>
          <Landing/>
        </Router>
      </div>
    );
  }
}

export default App;
