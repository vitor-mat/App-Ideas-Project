import React from 'react';

import * as S from './style';

interface PropsType{
  justifyContent: string;
}

export const HorizontalFlex: React.FC<PropsType> = ({ children, justifyContent }) => {
  return(
    <S.HorizontalFlex
      justifyContent={justifyContent}
    >
      {children}
    </S.HorizontalFlex>
  )
}