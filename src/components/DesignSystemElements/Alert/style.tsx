import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  background: ${colors.red[100]};
  display: flex;
  align-items: center;
  border-radius: 5px;
`