import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  font-weight: 700;
  font-size: 16px;
  color: black;
  border: 2px solid black;

  &::placeholder{
    opacity: .7
    color: black;
  }

`