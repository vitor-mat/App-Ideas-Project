import styled from 'styled-components';

import { colors } from '../../../styles/colors'

export const AnchorLink = styled.a`
  color: ${colors.blue[100]};
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`