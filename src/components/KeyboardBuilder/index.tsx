import * as React from "react";
import TableTitle from "../TableTitle/index.tsx";
import TableToolbar from "../TableToolbar/index.tsx";
import Table from "../Table/index.tsx";
import TableBottomBar from "./TableBottomBar.tsx";
import styled from "styled-components";

const StyledRoot = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap');
`;

export interface IKeyboardBuilderProps {}

export default function KeyboardBuilder(props: IKeyboardBuilderProps) {
  return (
    <StyledRoot>
      <div className="keyboardBuilder">
        <TableTitle
          title={"Keyboard Builder"}
          subtitle={"Build your ideal mechanical keyboard."}
        />
        <TableToolbar />
        <Table />
        <TableBottomBar />
      </div>
    </StyledRoot>
  );
}
