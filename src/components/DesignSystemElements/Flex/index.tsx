import React from 'react';

import * as S from './style';

interface PropsType{
  alignItems: string;
  justifyContent: string;
}

export const Flex: React.FC<PropsType> = ({ children, alignItems, justifyContent }) => {
  return(
    <S.Flex
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      { children }
    </S.Flex>
  )
}