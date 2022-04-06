import { NextPage } from 'next';
import { FormEvent } from 'react';

import * as S from './style';

interface Props{
  onSubmit: (e: FormEvent) => void
}

export const Form:NextPage<Props> = ({ children, onSubmit }) => {
  return(
    <S.Form
      onSubmit={onSubmit}
    >
      {children}
    </S.Form>
  )
}