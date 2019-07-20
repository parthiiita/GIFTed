import React, { Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MTable from './MTable';
class App extends Component{

  state={
    gifs: {data: []},
    pausedGifs: {}
  }



  fetchGif = (q) => {
    fetch(`api/v1/gifs/search?api_key=c9fn3g2RczsgtPOnbNrxfRsaTvblCJ91&q=${q}&limit=10&offset=0&rating=G&lang=en`)
    .then(re => Promise.resolve(re.json())).then((res) => this.setState({gifs: res}, () => console.log(this.state.gifs)));
  }

  onChangee = (e) => {
    console.log(e.target.value);
    this.fetchGif(e.target.value);
  };
  pausePlay = (gif) => {
    const pausedGifs = Object.assign({}, this.state.pausedGifs);
    if (pausedGifs[gif.id] === undefined) pausedGifs[gif.id] = false;
    pausedGifs[gif.id] = !pausedGifs[gif.id];
    this.setState({pausedGifs});
  }

  rowJSX = (id) => {
    return <div><a>{id}</a></div>
  }

  
  render(){
    return(
      <div className="App">
      
      <Router>
        <Route exact path="/" render={() => <div><h1> GIFTed !</h1>
        <input type="text" onChange={this.onChangee}/>
        <div style={{}}>{this.state.gifs.data.map(g => <img onClick={() => this.pausePlay(g)} style={{width:200, height: 200, margin:10, cursor: 'pointer'}} src={this.state.pausedGifs[g.id] ? g.images.original_still.url : g.images.original.url} />)}</div></div>} />
        <Route exact path="/actual" render={() => <MTable fetchData={this.fetchGif} rowJSX={this.rowJSX} onChangee={this.onChangee} />} />

        </Router>
      </div>
    );
  }
}

export default App;
