import React, { Component } from 'react';

function formatTime(time){
  let m = time/600 >> 0;
  m < 10 ? m = "0" + m : m = "" + m;
  time %= 600;
  let s = time/10 >> 0;
  s < 10 ? s = "0" + s : s = "" + s;
  time %= 10;
  return `${m}:${s}.${time}`;
}

class StopWatch extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: 0
    }
  }

  start = (e) => {
    this.interval = setInterval(
      () => {
        let t = this.state.time + 1;
        this.setState({time: t});
      }, 
      100
    )
  }

  stop = (e) => {
    clearInterval(this.interval);
  }

  reset = (e) => {
    this.stop();
    this.setState({time: 0});
  }

  render() {
    return (
      <fieldset>
        <legend>Stopwatch</legend>
        <h3>{formatTime(this.state.time)}s</h3>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </fieldset>
    );
  }
}

export default StopWatch;