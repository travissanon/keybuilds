import * as React from 'react';
import styled from 'styled-components';

const StyledTableHead = styled.tr`
`;

export interface ITableHeadProps {
}

export default function TableHead (props: ITableHeadProps) {
  return (
    <StyledTableHead>
        <th>Part</th>
        <th>Selection</th>
        <th>Store</th>
        <th>Price</th>
        <th></th>
    </StyledTableHead>
  );
}
