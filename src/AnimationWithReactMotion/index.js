import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';
import { delay, getCircleStyles } from '../helpers';

const AnimationWithReactMotion = () => {
  const [animated, animate] = useState(false);

  async function onRest() {
    await delay(200);
    animate(false);
  }

  return (
    <div>
      <button onClick={() => animate(true)}>Run Animation</button>
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(animated ? 100 : 0) }} onRest={onRest}>
        {value => <div style={getCircleStyles(value.x)} />}
      </Motion>
    </div>
  );
};

export default AnimationWithReactMotion;
