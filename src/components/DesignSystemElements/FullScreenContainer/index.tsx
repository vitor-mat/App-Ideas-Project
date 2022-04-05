import React from 'react';

import * as S from './style';

export const FullScreenContainer: React.FC = ({ children }) => {
  return(
    <S.FullScreenContainer>
      {children}
    </S.FullScreenContainer>
  )
}