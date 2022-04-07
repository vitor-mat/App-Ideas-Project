import React from 'react';

import * as S from './style';

interface PropsInterface {
  message: string;
  variant: string;
  visible: boolean;
}

export const Alert: React.FC<PropsInterface> = ({ message, variant, visible = false }) => {
  return (
    <>
      {visible ? (
        <S.Container>
          <span><b>Error:</b> {message}</span>
        </S.Container>
      ) : ""}
    </>
  )
}