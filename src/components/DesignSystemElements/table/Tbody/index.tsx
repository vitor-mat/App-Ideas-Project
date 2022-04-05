import { NextPage } from 'next';

import * as S from './style';

export const Tbody:NextPage = ({ children }) => {
  return(
    <S.Tbody>
      { children }
    </S.Tbody>
  )
}