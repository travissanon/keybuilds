import * as React from 'react';
import { Edit, Close } from '@carbon/icons-react';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
    td {
        background-color: #F4F4F4;
        padding: 16px 16px 30px;
        text-align: left;
        font-weight: 400;
        color: #525252;

        svg {
            padding-left: 20px;
        }

        button {
            background-color: #0F62FE;
            border: none;
            padding: 7px 16px;
            color: #fff;
        }
    }

    .cellFocus {
        font-weight: 700;
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
                const key = `cell:${index}::${text}`

                return (
                    <td key={key} className={`${cellFocusClassName}`}>
                        {text}
                    </td>
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
