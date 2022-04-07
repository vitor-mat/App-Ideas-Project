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

  const [inputNumberBin, setInputNumberBin] = React.useState("")
  const [errorVisibilitStatus, setErrorVisibilityStatus] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const numberDecConvertedToBin = 0

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    inputValidation()
  }

  const inputValidation = () => {
    
    if(isInputEmptyValidation()){
      setErrorMessage("Input is empty.")
      setErrorVisibilityStatus(true)
      return;
    }

    if(isNotInputValueLowerThanZero()){
      setErrorMessage("Your number is lower than zero.")
      setErrorVisibilityStatus(true)
      return;
    }

    if(isInputValueInteger()){
      setErrorMessage("Your number is not integer.")
      setErrorVisibilityStatus(true)
      return;
    }

    setErrorVisibilityStatus(false)

  }

  const isInputEmptyValidation = () => {
    if(inputNumberBin.length){
      return false
    }

    return true
  }

  const isNotInputValueLowerThanZero = () => {
    if(Number(inputNumberBin) >= 0){
      return false
    }

    return true
  }

  const isInputValueInteger = () => {
    if(Number.isInteger(Number(inputNumberBin))){
      return false
    }

    return true
  }

  return(
    <>
      <Navegation />
      <HorizontalFlex
        justifyContent="center"
      >
        <Heading variant="h1">
          Bin2Dec
        </Heading>
      </HorizontalFlex>
      <HorizontalFlex
        justifyContent="center"
      >
        <Form onSubmit={e => handleSubmit(e)}>
          <Input placeHolder="Type your number" type="number" inputVariableState={inputNumberBin} inputFunctionState={e => setInputNumberBin(e.target.value)} />
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