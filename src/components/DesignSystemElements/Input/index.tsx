import { NextPage } from 'next';

import * as S from './style';

interface Props{
  placeHolder: string;
  type?: string;
  inputVariableState: string;
  inputFunctionState: (e: {
    target:{
      value: string
    }
  }) => void;
}

export const Input:NextPage<Props> = ({ placeHolder, type="text", inputVariableState="", inputFunctionState }) => {
  return(
    <S.Input placeholder={placeHolder} type={type} onChange={inputFunctionState} value={inputVariableState}/>
  )
}