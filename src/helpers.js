export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const size = 300;

export const getCircleStyles = (left) => ({
  position: 'relative',
  left: `calc(${left}% - ${size * left / 100}px)`,
  width: size,
  height: size,
  background: 'blue',
  borderRadius: '50%',
});
