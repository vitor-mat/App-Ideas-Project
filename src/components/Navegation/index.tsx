import Link from 'next/link';

import React from 'react';

import * as S from './style';

export const Navegation: React.FC = () => {
  return(
    <S.Container>
      <Link href="/">
        <S.Anchor>
          {"< Voltar"}
        </S.Anchor>
      </Link>
    </S.Container>
  )
}