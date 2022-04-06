import { NextPage } from 'next';

import React from 'react';
import { FormEvent } from 'react';

import { Navegation } from '../../../components/Navegation';
import { HorizontalFlex } from '../../../components/DesignSystemElements/HorizontalFlex';
import { Heading } from '../../../components/DesignSystemElements/Heading';
import { Form } from '../../../components/DesignSystemElements/Form';
import { Input } from '../../../components/DesignSystemElements/Input';
import { Button } from '../../../components/DesignSystemElements/Button';

const Bin2Dec: NextPage = () => {

  const [inputNumberBin, setInputNumberBin] = React.useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
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
          <Button>
            Convert
          </Button>
        </Form>
      </HorizontalFlex>
    </>
  )
}

export default Bin2Dec