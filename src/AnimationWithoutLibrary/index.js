import React, { Component } from 'react';
import { delay, getCircleStyles } from '../helpers';

class AnimationWithoutLibrary extends Component {

  state = {
    left: 0,
    animating: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.left === 100) {
      await delay(300);
      this.setState({ left: 0 });
    }
  }

  animate = async () => {
    if (this.state.left !== 100) {
      this.setState({ animating: true, left: this.state.left + 2 });
      await delay(1);
      this.animate();
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.animate}>Run Animation</button>
        <div style={getCircleStyles(this.state.left)} />
      </div>
    );
  }
}

export default AnimationWithoutLibrary;
