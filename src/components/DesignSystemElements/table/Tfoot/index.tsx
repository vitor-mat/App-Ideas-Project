import { NextPage } from 'next';

import * as S from './style';

export const Tfoot:NextPage = ({ children }) => {
  return(
    <S.Tfoot>
      { children }
    </S.Tfoot>
  )
}