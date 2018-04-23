import React from "react";
import moment from "moment";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCounting: false,
      to: props.to,
      from: props.from,
      now: 0
    };
    this.count = this.count.bind(this);
    this.do = this.do.bind(this);
    this.stop = this.stop.bind(this);
  }

  componentDidMount() {
    this.count();
  }

  do() {
    if (Date.now() - this.state.now >= 1000) {
      this.state.now = Date.now();
      this.setState({ from: this.state.from - 1 });
      if (this.state.from === this.state.to) {
        this.stop();
        console.log(this.props);
        this.props.onSuccess();
      }
    }
    if (this.state.isCounting === true) {
      window.requestAnimationFrame(this.do);
    }
  }

  count() {
    this.state.now = Date.now();
    this.setState({ isCounting: true });
    if (this.state.from === this.state.to) {
      this.setState({ from: this.props.from });
    }
    window.requestAnimationFrame(this.do);
  }

  stop() {
    this.setState({ isCounting: false });
  }

  render() {
    const duration = moment.duration(this.state.from, 'seconds');
    let hours = duration.hours().toString();
    let minutes = duration.minutes().toString();
    let seconds = duration.seconds().toString();

    if (hours && hours.length === 1) {
      hours = `0${hours}`;
    }
    if (minutes && minutes.length === 1) {
      minutes = `0${minutes}`;
    }
    if (seconds.length === 1) {
      seconds = `0${seconds}`;
    }

    return (
      <div onClick={this.state.isCounting === false ? this.count : this.stop}>
        {hours ? `${hours} : ` : ''}{minutes ? `${minutes} : ` : ''}{seconds && `${seconds}`}
      </div>
    );
  }
}
