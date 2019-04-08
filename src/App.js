import React, { Component } from 'react';
import './App.css';
import SW from './components/StopWatch';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numWatches: 1
    }
  }

  watches(n){
    let arr = [];
    for(let i=0; i<n; i++){
      arr.push(
        <SW key={i} />
      );
    }
    return arr;
  }

  addWatch = () => {
    let n = this.state.numWatches + 1;
    this.setState({numWatches: n})
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.addWatch}>Add Timer</button>
        {this.watches(this.state.numWatches)}
      </div>
    );
  }
}

export default App;
