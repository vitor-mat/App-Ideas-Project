import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 120px;
  background: ${colors.yellow[100]};
  display: flex;
  align-items: center;
  padding-left: 15px;
`

export const Anchor = styled.a`
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
  transition: .01s linear;

  &:hover{
    text-decoration: underline;
    opacity: .8;
  }

  &:active{
    opacity: .7;
  }
`