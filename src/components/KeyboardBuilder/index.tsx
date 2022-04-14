import * as React from "react";
import TableTitle from "../TableTitle/index.tsx";
import TableToolbar from "../TableToolbar/index.tsx";
import Table from "../Table/index.tsx";
import TableBottomBar from "./TableBottomBar.tsx";
import ChoosePartButton from "../ChoosePartButton/index.tsx";
import styled from "styled-components";

const StyledRoot = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap');
`;

export interface IKeyboardBuilderProps {}

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
  },
};

const setupTableRowProps = (value) => {
  const partChosen = value.selection;

  if (partChosen) {
    return { 
      value: value,
      rowOptions: true
    }
  } else {
    const newData = { ...value, selection: <ChoosePartButton /> }

    return {
      value: newData,
      rowOptions: false
    }
  }
}

export default function KeyboardBuilder(props: IKeyboardBuilderProps) {
  return (
    <StyledRoot>
      <div className="keyboardBuilder">
        <TableTitle
          title={"Keyboard Builder"}
          subtitle={"Build your ideal mechanical keyboard."}
        />
        <TableToolbar />
        <Table data={mockKeyboardData} renderLogic={setupTableRowProps} />
        <TableBottomBar />
      </div>
    </StyledRoot>
  );
}
