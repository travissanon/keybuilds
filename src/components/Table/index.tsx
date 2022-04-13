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

const mockKeyboardData = {
    case: {
        partName: "Case",
        selection: "Tofu84 Mechanical Keyboard Case",
        store: "KBDFans",
        price: "$34.99"
    },
    circuitBoard: {
        partName: "Circuit Board (PCB)",
        selection: "DZ60 Soldered 60% Mechanical Keyboard PCB",
        store: "KBDFans",
        price: "$36.89"
    },
    switches: {
        partName: "Switches",
        selection: false,
        store: null,
        price: null
    }
};

export interface ITableProps {}

export default function Table(props: ITableProps) {
  return (
    <StyledTable cellspacing="0" cellpadding="0">
        <tbody>
            <TableHead />
            {Object.entries(mockKeyboardData).map((item, index) => {
                const compositeKey = `cell:${index}::${item[0]}`;
                const data = item[1];

                const partChosen = data.selection;

                if (partChosen) {
                    return (
                        <TableRow
                            key={compositeKey}
                            data={data}
                            cellFocus={'partName'}
                            rowOptions={true}
                        />
                    )
                } else {
                    const newData = { ...data, selection: <ChoosePartButton /> }

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