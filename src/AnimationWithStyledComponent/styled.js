import styled from 'styled-components';

const Circle = styled.div`
  width: 300px;
  height: 300px;
  background: blue;
  border-radius: 50%;
`;

export const transitionSpeed = 500;

const Inner = styled.div`
  position: relative;
  left: ${({ animated }) => animated ? '100%' : '0'};
  display: inline-block;
  transition: left ${transitionSpeed}ms ease;
`;

export { Circle, Inner };
