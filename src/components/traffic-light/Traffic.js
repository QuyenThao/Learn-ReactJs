import React, { Component } from 'react';
import TrafficLight from './TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class Traffic extends Component {
  constructor() {
    super();
    this.state = {
        currentColor: GREEN
    };
    console.log(this.currentColor);

    setInterval(() => {
        this.setState({
            currentColor: this.getNextColor(this.state.currentColor)
        })
    }, 2000);
  }

  getNextColor(color) {
    switch(color) {
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
}

  render() {
    const { currentColor } = this.state;

    return (
      <div className="Traffic">
        <TrafficLight currentColor={currentColor} />
      </div>
    );
  }
}
export default Traffic;
