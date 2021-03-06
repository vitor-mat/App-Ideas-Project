import { NextPage } from 'next';

import React from 'react';
import { FormEvent } from 'react';

import { colors } from '../../../styles/colors';

import { Navegation } from '../../../components/Navegation';
import { HorizontalFlex } from '../../../components/DesignSystemElements/HorizontalFlex';
import { Heading } from '../../../components/DesignSystemElements/Heading';
import { Form } from '../../../components/DesignSystemElements/Form';
import { Input } from '../../../components/DesignSystemElements/Input';
import { Button } from '../../../components/DesignSystemElements/Button';
import { Text } from '../../../components/DesignSystemElements/Text';
import { Alert } from '../../../components/DesignSystemElements/Alert';

export const testFunction = () => true

const Dec2Bin: NextPage = () => {

  const [inputNumberDec, setInputNumberDec] = React.useState("")
  const [errorVisibilitStatus, setErrorVisibilityStatus] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [numberDecConvertedToBin, setNumberDecConvertedToBin] = React.useState("")
  const [textInputColor, setTextInputColor] = React.useState(colors.black[100])
  const [keyDownOnInput, setKeyDownOnInput] = React.useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(inputValidation()){
      convertInputDecNumberToBin()
      setTextInputColor(colors.black[100])
    }
  }

  const inputValidation = () => {
    

    if(isInputEmptyValidation() || isNotInputValueLowerThanZero() || isInputValueInteger()){
      setNumberDecConvertedToBin("")
      setErrorVisibilityStatus(true)
      return false;
    }

    setErrorVisibilityStatus(false)
    return true;

  }

  const isInputEmptyValidation = () => {
    if(inputNumberDec.length){
      return false;
    }
    setErrorMessage("Input is empty.")
    return true;
  }

  const isNotInputValueLowerThanZero = () => {
    if(Number(inputNumberDec) >= 0){
      return false;
    }
    setErrorMessage("Your number is lower than zero.")
    return true;
  }

  const isInputValueInteger = () => {
    if(Number.isInteger(Number(inputNumberDec))){
      return false;
    }
    setErrorMessage("Your number is not integer.")
    return true;
  }

  const convertInputDecNumberToBin = () => {
    setNumberDecConvertedToBin(Number(inputNumberDec).toString(2))
    clearInputValue()
  }

  const clearInputValue = () => {
    setInputNumberDec("")
  }


  const handleCharacterInputForOnlyNumbers = (inputValue: string) => {

    const inputKeyIsANumberValid = !!Number(inputValue)

    const inputKeyIsBackspace = keyDownOnInput === "Backspace"

    if(inputKeyIsANumberValid || inputKeyIsBackspace){
      setInputNumberDec(inputValue)
      setTextInputColor(colors.black[100])
      setErrorVisibilityStatus(false)
    }
  }

  const handleKeyDownPermission = (keyDownValue: string) => {
    setKeyDownOnInput(keyDownValue)

    if(inputNumberDec.length == 6 && keyDownValue !== "Backspace"){
      setTextInputColor(colors.red[200])
      setErrorVisibilityStatus(true)
      setErrorMessage("Number max of characters for input was achived.")
    }
  }

  return(
    <>
      <Navegation />
      <HorizontalFlex
        justifyContent="center"
      >
        <Heading variant="h1">
          Dec2Bin
        </Heading>
      </HorizontalFlex>
      <HorizontalFlex
        justifyContent="center"
      >
        <Form onSubmit={e => handleSubmit(e)}>
          <Input 
            placeHolder="Type your number" 
            type="text" 
            inputVariableState={inputNumberDec} 
            inputFunctionState={e => handleCharacterInputForOnlyNumbers(e.target.value)}
            inputKeyDownFunction={e => handleKeyDownPermission(e.key)} 
            isCounterInput={true}
            maxNumberOfCharacters={6}
            charactersCounter={inputNumberDec.length}
            textColor={textInputColor}
          />
          <Alert variant="Erro" message={errorMessage} visible={errorVisibilitStatus}/>
           <Button>
            Convert
          </Button>
        </Form>
      </HorizontalFlex>
      <HorizontalFlex
        justifyContent="center"
      >
        <Text>
          {numberDecConvertedToBin}
        </Text>
      </HorizontalFlex>
    </>
  )
}

export default Dec2Bin