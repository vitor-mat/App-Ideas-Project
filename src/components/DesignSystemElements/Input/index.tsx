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

  if(isCounterInput && maxNumberOfCharacters === undefined){
    throw "prop 'isCounterInput' is true but prop 'maxNumberOfCharacters' not found";
  }

  if(maxNumberOfCharacters !== undefined && maxNumberOfCharacters < 1){
    throw "prop 'maxNumberOfCharacters' most be greater than zero";
  }

  if(isCounterInput && charactersCounter === undefined){
    throw "prop 'isCounterInput' is true but prop 'charactersCounter' not found";
  }

  if(charactersCounter !== undefined && charactersCounter < 0){
    throw "prop 'charactersCounter' most be zero or greater";
  }

  return(
    <S.Container>
      <S.Input placeholder={placeHolder} type={type} onChange={inputFunctionState} value={inputVariableState}/>
      {isCounterInput && type=="number" && (
        <S.CounterContainer>
          <S.NumberLimitCounter>{`${charactersCounter}/${maxNumberOfCharacters}`}</S.NumberLimitCounter>
        </S.CounterContainer>
      )}
    </S.Container>
  )
}