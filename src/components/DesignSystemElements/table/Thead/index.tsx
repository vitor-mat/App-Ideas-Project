import { NextPage } from 'next';

import * as S from './style';

export const Thead:NextPage = ({ children }) => {
  return(
    <S.Thead>
      { children }
    </S.Thead>
  )
}