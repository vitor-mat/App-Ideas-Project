import { NextPage } from 'next';

import * as S from './style';

export const Tr:NextPage = ({ children }) => {
  return(
    <S.Tr>
      { children }
    </S.Tr>
  )
}