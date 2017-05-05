import React from 'react';

class Clock extends React.Component {
  constructor(){
    super();
    this.state = { time: new Date() };
    this.tickID = 0;
  }

  render() {
    let now = this.state.time;
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let fullDate = day + "/" + month + "/" + year;
    return (
      <section className="clock-box"> Clock
        <section className="time-box">
          <h1>Time:</h1>
          <h1>{`${now.toTimeString()}`}</h1>
        </section>
        <section className="date-box">
          <h1>Date:</h1>
          <h1>{`${fullDate}`}</h1>
        </section>
      </section>
    );
  }

  tick(){
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.tickID = setInterval( this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    clearTimeout(this.tickID);
  }
}


export default Clock;
