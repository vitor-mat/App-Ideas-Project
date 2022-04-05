import React from 'react';

import * as S from './style';

export const FluidContainer: React.FC = ({ children }) => {
  return(
    <S.FluidContainer>
      {children}
    </S.FluidContainer>
  )
}