import styled from 'styled-components';

interface FlexType{
  alignItems: string;
  justifyContent: string;
}

export const Flex = styled.div<FlexType>`
  ${({ alignItems}) => alignItems};
  ${({ justifyContent }) => justifyContent};
`