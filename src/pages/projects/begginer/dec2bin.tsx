import { NextPage } from 'next';

import React from 'react';
import { FormEvent } from 'react';

import { Navegation } from '../../../components/Navegation';
import { HorizontalFlex } from '../../../components/DesignSystemElements/HorizontalFlex';
import { Heading } from '../../../components/DesignSystemElements/Heading';
import { Form } from '../../../components/DesignSystemElements/Form';
import { Input } from '../../../components/DesignSystemElements/Input';
import { Button } from '../../../components/DesignSystemElements/Button';
import { Text } from '../../../components/DesignSystemElements/Text';
import { Alert } from '../../../components/DesignSystemElements/Alert';

const Bin2Dec: NextPage = () => {

  const [inputNumberDec, setInputNumberDec] = React.useState("")
  const [errorVisibilitStatus, setErrorVisibilityStatus] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [numberDecConvertedToBin, setNumberDecConvertedToBin] = React.useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(inputValidation()){
      convertInputDecNumberToBin()
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


  const handleNumberMaxOfCharacters = (inputValue: string) => {
    if(inputNumberDec.length < 6 || inputNumberDec.length > inputValue.length){
      setInputNumberDec(inputValue)
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
            type="number" 
            inputVariableState={inputNumberDec} 
            inputFunctionState={e => handleNumberMaxOfCharacters(e.target.value)} 
            isCounterInput={true}
            maxNumberOfCharacters={6}
            charactersCounter={inputNumberDec.length}
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

export default Bin2Dec