export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getCircleStyles = (left) => ({
  position: 'relative',
  left: `${left}%`,
  width: 300,
  height: 300,
  background: 'blue',
  borderRadius: '50%',
});
