import styled from 'styled-components';

interface HorizontalFlexType{
  justifyContent: string;
}

export const HorizontalFlex = styled.div<HorizontalFlexType>`
  display: flex;
  ${({justifyContent}) => `justify-content: ${justifyContent};`}
`