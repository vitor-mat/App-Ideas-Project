import { NextPage } from 'next';

import * as S from './style';

interface Props{
  whenInView?: string
}

export const Table:NextPage<Props> = ({ children, whenInView="" }) => {
  return(
    <S.BoxTableBorder
      whenInView={whenInView}
    >
      <S.Table
        whenInView={whenInView}
      >
        { children }
      </S.Table>
    </S.BoxTableBorder>
  )
}