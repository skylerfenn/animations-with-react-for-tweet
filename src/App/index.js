import React from 'react';
import AnimationWithStyledComponent from '../AnimationWithStyledComponent';
import AnimationWithReactMotion from '../AnimationWithReactMotion';
import AnimationWithoutLibrary from '../AnimationWithoutLibrary';

function App() {
  return (
    <div>
      <AnimationWithStyledComponent />
      <AnimationWithReactMotion />
      <AnimationWithoutLibrary />
    </div>
  );
}

export default App;
