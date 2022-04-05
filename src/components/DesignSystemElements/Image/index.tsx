import React from 'react';

import * as S from './style';

interface PropsType{
  src: string;
  alt: string;
}

export const Image : React.FC<PropsType> = ({ src, alt }) => {
  return(
    <S.Image src={src} alt={alt}/>
  )
}