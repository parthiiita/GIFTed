import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MTable from './MTable';
import Cart from './Cart';
import NestedViewer from './NestedViewer';
class App extends Component {

  state = {
    data: {
      user: {
        name: 'Parth',
        Age:  {
          years: '26',
          months: '4',
          Address: {
            city:'agra',
            details: {
              state: 'UP',
              moredetails: {
                country: 'india',
                moredetails: {
                  constinent: 'asia',
                }
              }
            }
          }
        },
        college: {
          collegeName: 'IIIT A',
          year: '2015',
          branch: 'IT',
          cgpa: {
            lastSem: '6',
            cumulative: '7.1'
          }
        }
      }
    }
  }

 


  render() {
    return (
      <div className="App">

        <Router>
          <Route exact path="/" render={() => <NestedViewer
          data={this.state.data}
          index={0}
            />} />
        </Router>
      </div>
    );
  }
}

export default App;
