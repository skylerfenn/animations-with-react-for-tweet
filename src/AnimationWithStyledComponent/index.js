import React, { Component, useState } from 'react';
// import { Circle, Inner } from './styled';
import PropTypes from 'prop-types';
import { delay } from '../helpers';
import styled from 'styled-components';

MoveRight.propTypes = {
  children: PropTypes.node,
  animated: PropTypes.bool,
  onAnimateEnd: PropTypes.func,
};


  const transitionSpeed = 500;

  const Circle = styled.div`
    width: 300px;
    height: 300px;
    background: blue;
    border-radius: 50%;
  `;

  const Inner = styled.div`
    position: relative;
    left: ${({ animated }) => animated ? '100%' : '0'};
    display: inline-block;
    transition: left ${transitionSpeed}ms ease;
  `;

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
