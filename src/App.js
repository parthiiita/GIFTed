import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MTable from './MTable';
class App extends Component {

  state = {
    gifs: [],
    pausedGifs: {},
    fetchStatus: 'init'
  }

  componentDidMount() {
    this.fetchGif();
  }


  fetchGif = (q) => {
    if (this.state.fetchStatus !== 'loading') {
      this.setState({ fetchStatus: 'loading' });
      return fetch(`api/v1/gifs/search?api_key=c9fn3g2RczsgtPOnbNrxfRsaTvblCJ91&q=${q}&limit=10&offset=0&rating=G&lang=en`)
        .then(re => Promise.resolve(re.json())).then((res) => this.setState({ fetchStatus: 'success', gifs: [...this.state.gifs, ...res.data] }, () => console.log(this.state.gifs)));
    } else {
      return Promise.resolve();
    }
  }

  onChangee = (e) => {
    console.log(e.target.value);
    this.fetchGif(e.target.value);
  };


  rowJSX = (data) => {
    return <div><a href={data.images.original.url}>{data.id}</a></div>
  }


  render() {
    return (
      <div className="App">

        <Router>
          <Route exact path="/" render={() => <MTable
            headers={['ID', 'TYPE', 'TITLE', 'DATE', 'RATING', 'GIF']}
            headerStyle={{ width: '200px' }}
            asyncStatus={this.state.fetchStatus}
            totalItems={this.state.gifs.length} data={this.state.gifs} fetchData={this.fetchGif} rowJSX={this.rowJSX} onChangee={this.onChangee} />} />
        </Router>
      </div>
    );
  }
}

export default App;
