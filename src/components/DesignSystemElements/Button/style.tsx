import styled from 'styled-components';

import { colors } from '../../../styles/colors';

interface ButtonType{
  maxWidth: string;
  marginTop: number;
  backgroundColor?: string;
  margin?: string;
}

export const Button = styled.button<ButtonType>`
  width: 100%;
  max-width: ${({maxWidth}) => maxWidth};
  height: 40px;
  border-radius: 10px;
  padding: 5px;
  border: none;
  outline: none;
  margin-top: ${({marginTop}) => marginTop}px;
  cursor: pointer;
  background: ${colors.yellow["100"]};
  transition: .1s linear;
  font-weight: 700;
  font-size: 18px;
  background: ${({backgroundColor}) => backgroundColor ? `${backgroundColor}` : ""};
  margin: ${({margin}) => margin ? `${margin}` : ""};

  &:active{
    opacity: 0.7;
  }
`