import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const CounterContainer = styled.div`
  height: 100%;
  position: absolute;
  bottom: 0px;
  right: 10px;
  display: flex;
  align-items: center;
`

interface NumberLimitCounterType{
  textColor?: string;
}

export const NumberLimitCounter = styled.span<NumberLimitCounterType>`
  font-weight: 700;
  ${({ textColor }) => textColor ? `color: ${textColor};` : ""}
`

interface InputType{
  textColor?: string;
}

export const Input = styled.input<InputType>`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  font-weight: 700;
  font-size: 16px;
  color: black;
  border: 2px solid black;
  ${({ textColor }) => textColor ? `color: ${textColor};` : ""}

  &::placeholder{
    opacity: .7
    color: black;
  }

`