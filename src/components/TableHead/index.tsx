import * as React from 'react';
import styled from 'styled-components';

const StyledTableHead = styled.tr`
`;

export interface ITableHeadProps {
  headers: string[];
}

export default function TableHead (props: ITableHeadProps) {
  const { headers } = props;

  return (
    <StyledTableHead>
      {headers.map((header, index) => {
        return <th key={index}>{header}</th>
      })}
      <th></th>
    </StyledTableHead>
  );
}
