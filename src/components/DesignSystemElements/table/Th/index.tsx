import { NextPage } from 'next';

import * as S from './style';

export const Th:NextPage = ({ children }) => {
  return(
    <S.Th>
      { children }
    </S.Th>
  )
}