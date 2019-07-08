import React, { Component} from "react";
import "./App.css";

class App extends Component{
  state={
    gifs: {data: []}
  }



  fetchGif = (q) => {
    fetch(`api/v1/gifs/search?api_key=c9fn3g2RczsgtPOnbNrxfRsaTvblCJ91&q=${q}&limit=25&offset=0&rating=G&lang=en`)
    .then(re => Promise.resolve(re.json())).then((res) => this.setState({gifs: res}, () => console.log(this.state.gifs)));
  }

  onChangee = (e) => {
    console.log(e.target.value);
    this.fetchGif(e.target.value);
  };
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <input type="text" onChange={this.onChangee}/>
        <div style={{display: 'flex'}}>{this.state.gifs.data.map(g => <img src={g.images.original.url} />)}</div>
      </div>
    );
  }
}

export default App;