import React from 'react';

import * as S from './style';

interface PropsInterface{
  message: string;
  variant: string;
}

export const Alert: React.FC<PropsInterface> = ({ message, variant}) => {
  return(
    <S.Container>
      <span><b>Error:</b> {message}</span>
    </S.Container>
  )
}