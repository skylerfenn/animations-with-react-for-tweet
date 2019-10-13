import React, { Component, useState } from 'react';
import { Circle, Inner, transitionSpeed } from './styled';
import PropTypes from 'prop-types';
import { delay } from '../helpers';

class MoveRight extends Component {
  async componentDidUpdate(prevProps) {
    if (this.props.animated && prevProps.animated !== this.props.animated) {
      await delay(transitionSpeed * 2);
      this.props.onAnimateEnd();
    }
  }

  render() {
    const { children, animated } = this.props;
    return (
      <div>
        <Inner animated={animated}>
          {children}
        </Inner>
      </div>
    );
  }
}

MoveRight.propTypes = {
  children: PropTypes.node,
  animated: PropTypes.bool,
  onAnimateEnd: PropTypes.func,
};

const AnimationWithStyledComponent = () => {
  const [animated, animate] = useState(false);
  return (
    <div>
      <button onClick={() => animate(true)}>Run Animation</button>
      <MoveRight animated={animated} onAnimateEnd={() => animate(false)}>
        <Circle />
      </MoveRight>
    </div>
  );
};

export default AnimationWithStyledComponent;
