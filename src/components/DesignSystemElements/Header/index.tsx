import React from 'react';

import * as S from './style';

export const Header: React.FC = ({ children }) => {
  return(
    <S.Header>
      {children}
    </S.Header>
  )
}