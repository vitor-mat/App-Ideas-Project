import { NextPage } from 'next';

import { Navegation } from '../../../components/Navegation';
import { HorizontalFlex } from '../../../components/DesignSystemElements/HorizontalFlex';
import { Heading } from '../../../components/DesignSystemElements/Heading';

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
    </>
  )
}

export default Bin2Dec