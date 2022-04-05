import Link from 'next/link';

import React from 'react';

import * as S from './style';

interface PropsType{
  href: string;
}

export const AnchorLink: React.FC<PropsType> = ({ children, href }) => {
  return(
    <Link href={href}>
      <S.AnchorLink>
        { children }
      </S.AnchorLink>
    </Link>
  )
}
