import * as React from 'react';
import styled from 'styled-components';
import TableCell from '../TableCell/index.tsx';
import TableRowOptions from '../TableRowOptions/index.tsx';

const StyledTableRow = styled.tr`
    .cellFocus {
        font-weight: 700;
    }
`;

export interface ITableRowProps {
    data: object;
    cellFocus: string;
    rowOptions?: boolean;
    addButton?: boolean;
}

export default function TableRow (props: ITableRowProps) {
    const { data, cellFocus, rowOptions, addButton } = props;
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
            {rowOptions && (<TableRowOptions />)}
            {addButton && (<button>Add</button>)}
        </StyledTableRow>
    );
}
