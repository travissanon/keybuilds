import * as React from "react";
import styled from "styled-components";
import TableRow from '../TableRow/index.tsx';
import TableHead from '../TableHead/index.tsx';

const StyledTable = styled.table`
  background-color: lightgray;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  border-collapse: collapse;
  background-color: #F4F4F4;
  width: 100%;

  th {
    padding: 16px 16px 30px;
    background-color: #E0E0E0;
    color: #161616;
    text-align: left;
  }
`;

export interface ITableProps {
    data: any;
    renderLogic: any;
    headers: string[];
    rowOptions?: boolean;
    addButton?: boolean;
}

export default function Table(props: ITableProps) {
    const { data, headers, rowOptions, renderLogic, addButton } = props;

    return (
        <StyledTable cellspacing="0" cellpadding="0">
            <tbody>
                <TableHead headers={headers} />
                {data.map((value, index) => {
                    const compositeKey = `cell:${index}::${value}`;

                    if (renderLogic) {
                        const config = renderLogic(value);

                        return (
                            <TableRow
                                key={compositeKey}
                                data={config.value}
                                cellFocus={'partName'}
                                rowOptions={config.rowOptions}
                            />
                        )
                    } else {
                        return (
                            <TableRow
                                key={compositeKey}
                                data={value}
                                cellFocus={'partName'}
                                rowOptions={rowOptions}
                                addButton={addButton}
                            />
                        )
                    }

                })}
            </tbody>
        </StyledTable>
    );
}