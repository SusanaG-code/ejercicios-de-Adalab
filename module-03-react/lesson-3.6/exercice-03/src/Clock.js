import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    let date = new Date();
    this.state = {
      clockShape: "clock",
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }
  updateClock() {
    let date = new Date();
    this.setState({
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      clockShape: "red",
    });
  }

  render() {
    return (
      <div className={this.state.clockShape}>
        <p>
          The hour is{this.state.hour}
          {this.state.minutes}
          {this.state.seconds}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {};
export default Clock;
