import styled from 'styled-components';

const size = 300;

export const Circle = styled.div`
  width: ${size}px;
  height: ${size}px;
  background: blue;
  border-radius: 50%;
`;

export const transitionSpeed = 500;

export const Inner = styled.div`
  position: relative;
  left: ${({ animated }) => animated ? `calc(100% - ${size}px)` : '0'};
  display: inline-block;
  transition: left ${transitionSpeed}ms ease;
`;
