import { throws } from 'assert/strict';
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
  isCounterInput?: boolean;
  maxNumberOfCharacters?: number;
  charactersCounter?: number;
}

export const Input:NextPage<Props> = ({ placeHolder, type="text", inputVariableState="", inputFunctionState, isCounterInput=false, maxNumberOfCharacters, charactersCounter }) => {

  return(
    <S.Container>
      <S.Input placeholder={placeHolder} type={type} onChange={inputFunctionState} value={inputVariableState}/>
      {isCounterInput && type=="number" &&(
        <S.CounterContainer>
          <S.NumberLimitCounter>{`${charactersCounter}/${maxNumberOfCharacters}`}</S.NumberLimitCounter>
        </S.CounterContainer>
      )}
    </S.Container>
  )
}