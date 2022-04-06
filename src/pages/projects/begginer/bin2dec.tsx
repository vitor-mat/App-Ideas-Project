import { NextPage } from 'next';

import { Navegation } from '../../../components/Navegation';
import { HorizontalFlex } from '../../../components/DesignSystemElements/HorizontalFlex';
import { Heading } from '../../../components/DesignSystemElements/Heading';
import { Form } from '../../../components/DesignSystemElements/Form';
import { Button } from '../../../components/DesignSystemElements/Button';

const Bin2Dec: NextPage = () => {

  const handleSubmit = () => {}

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
        <Form onSubmit={handleSubmit}>
          <Button>
            Convert
          </Button>
        </Form>
      </HorizontalFlex>
    </>
  )
}

export default Bin2Dec