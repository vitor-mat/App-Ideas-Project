import { useRouter } from 'next/router';

import React from 'react';

import { Table } from '../DesignSystemElements/table/Table/index';
import { Thead } from '../DesignSystemElements/table/Thead/index';
import { Tr } from '../DesignSystemElements/table/Tr/index';
import { Th } from '../DesignSystemElements/table/Th/index';
import { Tbody } from '../DesignSystemElements/table/Tbody/index';
import { Td } from '../DesignSystemElements/table/Td/index';
import { Tfoot } from '../DesignSystemElements/table/Tfoot/index';
import { AnchorLink } from '../DesignSystemElements/Link';

export const TableBegginer: React.FC = () => {

  const router = useRouter()

  return (
    <Table whenInView="Desktop">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Short Description</Th>
          <Th>Tier</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <AnchorLink href="/">
              Bin2Dec
            </AnchorLink>
          </Td>
          <Td>Binary-to-Decimal number converter</Td>
          <Td>1-Beginner</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>

        </Tr>
      </Tfoot>
    </Table>
  )
}