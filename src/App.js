import React, { Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MTable from './MTable';
class App extends Component{
  
  render(){
    return(
      <div className="App">
      
      <Router>
        <Route exact path="/" render={() => <div>dfault route</div>} />
        <Route exact path="/actual" render={() => <MTable />} />

        </Router>
      </div>
    );
  }
}

export default App;
