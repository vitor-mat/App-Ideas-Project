import { NextPage } from 'next';

import * as S from './style';

export const Td:NextPage = ({ children }) => {
  return(
    <S.Td>
      { children }
    </S.Td>
  )
}