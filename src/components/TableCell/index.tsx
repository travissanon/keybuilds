import * as React from 'react';
import styled from 'styled-components';

const StyledTableCell = styled.td`
    background-color: #F4F4F4;
    padding: 16px 16px 30px;
    text-align: left;
    font-weight: 400;
    color: #525252;

    .cellFocus {
        font-weight: 700;
    }
`;

export interface ITableCellProps {
    classes: Array<string>;
    content: any;
}

export default function TableCell (props: ITableCellProps) {
    const { classes, content } = props;
    return (
        <StyledTableCell className={classes.join(' ')}>
            {content}
        </StyledTableCell>
    );
}
