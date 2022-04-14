import * as React from "react";
import styled from "styled-components";
import TableRow from '../TableRow/index.tsx';
import TableHead from '../TableHead/index.tsx';
import ChoosePartButton from "../ChoosePartButton/index.tsx";

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
}

export default function Table(props: ITableProps) {
    const { data } = props;

    return (
        <StyledTable cellspacing="0" cellpadding="0">
            <tbody>
                <TableHead />
                {Object.entries(data).map((item, index) => {
                    const compositeKey = `cell:${index}::${item[0]}`;
                    const val: any = item[1];

                    // TODO: Refactor this code to make this Table component more generic.
                    const partChosen = val.selection;

                    if (partChosen) {
                        return (
                            <TableRow
                                key={compositeKey}
                                data={val}
                                cellFocus={'partName'}
                                rowOptions={true}
                            />
                        )
                    } else {
                        const newData = { ...val, selection: <ChoosePartButton /> }

                        return (
                            <TableRow
                                key={compositeKey}
                                data={newData}
                                cellFocus={'partName'}
                                rowOptions={false}
                            />
                        )
                    }
                })}
            </tbody>
        </StyledTable>
    );
}