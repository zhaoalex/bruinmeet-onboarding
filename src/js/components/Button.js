// @flow

import styled from 'styled-components';

const colors = {
  blue: 'rgba(92, 156, 239, 1)',
  white: 'rgba(255, 255, 255, 1)'
};

const Button = styled.button`
  background: ${props => props.primary ? colors.blue : colors.white};
  color: ${props => props.primary ? colors.white : colors.blue};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid ${colors.blue};
  border-radius: 20px;
  padding: 0.5em 1.5em;
  margin: 0em 0.5em;
  cursor: pointer;
`;

export default Button;