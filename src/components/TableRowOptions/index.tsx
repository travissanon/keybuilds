import * as React from 'react';
import { Edit, Close } from '@carbon/icons-react';
import styled from 'styled-components';

const StyledTableRowOptions = styled.td`
    svg {
        padding-left: 20px;
    }

    button {
        background-color: #0F62FE;
        border: none;
        padding: 7px 16px;
        color: #fff;
    }
`;
export interface ITableRowOptionsProps {
}

export default function TableRowOptions (props: ITableRowOptionsProps) {
  return (
    <StyledTableRowOptions>
        <button>Buy</button>
        <Edit />
        <Close />
    </StyledTableRowOptions>
  );
}
