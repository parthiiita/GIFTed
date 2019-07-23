import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MTable from './MTable';
import Cart from './Cart';
class App extends Component {

  state = {
    gifs: [],
    pausedGifs: {},
    fetchStatus: 'init',
    search: undefined,
    page: 0
  }

  componentDidMount() {
    //this.fetchGif();
  }


  fetchGif = () => {
    if (this.state.fetchStatus !== 'loading') {
      this.setState({ fetchStatus: 'loading' });
      return fetch(`api/v1/gifs/search?api_key=c9fn3g2RczsgtPOnbNrxfRsaTvblCJ91&q=${this.state.search}&limit=100&offset=${this.state.page}&rating=G&lang=en`)
        .then(re => Promise.resolve(re.json())).then((res) => this.setState({ page: this.state.page  +1, fetchStatus: 'success', gifs: [...this.state.gifs, ...res.data] }, () => console.log(this.state.gifs)));
    } else {
      return Promise.resolve();
    }
  }

  onChangee = (e) => {
    console.log(e.target.value);
    var val = e.target.value;
    this.setState({gifs: [], search: e.target.value, page:0}, () => this.fetchGif());
  };


  rowJSX = (data) => {
    return <div style={{display: 'flex', background: 'mediumpurple'}}>
      <a style={{ position:'sticky',left: 0, background:'orange', textAlign: 'center', height: '100px', minWidth: '200px' }} href={data.images.original.url}>{data.id}</a>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}>{data.type}</div>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}>{data.title}</div>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}>{data.import_datetime}</div>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}>{data.rating}</div>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}><img style={{width:'inherit', height:'inherit'}} src={data.images.original.url} /></div>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}><img style={{width:'inherit', height:'inherit'}} src={data.images.original.url} /></div>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}><img style={{width:'inherit', height:'inherit'}} src={data.images.original.url} /></div>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}><img style={{width:'inherit', height:'inherit'}} src={data.images.original.url} /></div>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}><img style={{width:'inherit', height:'inherit'}} src={data.images.original.url} /></div>
      <div style={{ textAlign: 'center',height: '100px',minWidth: '200px' }}><img style={{width:'inherit', height:'inherit'}} src={data.images.original.url} /></div>


      </div>
  }


  render() {
    return (
      <div className="App">

        <Router>
          <Route exact path="/" render={() => <Cart
            />} />
        </Router>
      </div>
    );
  }
}

export default App;
