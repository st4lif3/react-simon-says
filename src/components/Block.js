import React from 'react';
import styled from 'styled-components';
import { withReflex } from 'reflexbox';
import color from 'color';
import createNeonAnimation from '../utils/create-neon-animation';

const transform = `
  transform: scale(1.02);
`

const activeCSS = props => `
  border: 1px solid white;
  background-color: ${color(props.color).lighten(0.7777).hexString()};
  animation: ${createNeonAnimation(props.color)} 0.5s linear infinite;
  ${transform}
`;

const Block = styled.div`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background-color: ${({ color }) => color}
  cursor: pointer;
  animation: none;
  transition: transform 0.3s;
  ${({ active }) => active ? activeCSS : ``}

  &:hover {
    ${transform}
  }

  &.top-left {
    border-radius: 320px 20px 20px 20px;
  }

  &.top-right {
    border-radius: 20px 320px 20px 20px;
  }

  &.bottom-left {
    border-radius: 20px 20px 20px 320px;
  }

  &.bottom-right {
    border-radius: 20px 20px 320px 20px;
  }

`;

export default withReflex()(Block);