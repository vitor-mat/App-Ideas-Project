import Rect from 'react';

import * as S from './style';

export const Text: React.FC = ({ children }) => {
  return(
    <S.Text>
      {children}
    </S.Text>
  )
}