import React, { Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component{
  
  render(){
    return(
      <div className="App">
      hello world
      <Router>
        <Route path="/" render={() => <div>dfault route</div>} />
        <Route exact path="/actual" render={() => <div>actual route</div>} />

        </Router>
      </div>
    );
  }
}

export default App;
