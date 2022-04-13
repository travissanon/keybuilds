import * as React from 'react';
import { Edit, Close } from '@carbon/icons-react';
import styled from 'styled-components';
import TableCell from '../TableCell/index.tsx';

const StyledTableRow = styled.tr`
    tr {}

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

export interface ITableRowProps {
    data: object;
    cellFocus: string;
}

export default function TableRow (props: ITableRowProps) {
    const { data, cellFocus } = props;
    return (
        <StyledTableRow>
            {Object.entries(data).map((item, index) => {
                const cellFocusClassName = item[0] === cellFocus ? 'cellFocus' : '';
                const text = item[1];
                const compositeKey = `cell:${index}::${text}`

                return (
                    <TableCell
                        key={compositeKey}
                        classes={[cellFocusClassName]}
                        content={text}
                    />
                )
            })}
            <td>
                <button>Buy</button>
                <Edit />
                <Close />
            </td>
        </StyledTableRow>
    );
}
