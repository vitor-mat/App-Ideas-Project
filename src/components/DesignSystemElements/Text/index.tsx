import Rect from 'react';

import * as S from './style';

interface PropsType{
  testId?: string;
}

export const Text: React.FC<PropsType> = ({ children, testId }) => {
  return(
    <S.Text
      data-testid={testId}
    >
      {children}
    </S.Text>
  )
}