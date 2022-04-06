import { NextPage } from 'next';

import { Navegation } from '../../../components/Navegation';
import { HorizontalFlex } from '../../../components/DesignSystemElements/HorizontalFlex';
import { Heading } from '../../../components/DesignSystemElements/Heading';
import { Button } from '../../../components/DesignSystemElements/Button';

const Bin2Dec: NextPage = () => {
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
        <Button>
          Convert
        </Button>
      </HorizontalFlex>
    </>
  )
}

export default Bin2Dec