import * as React from "react";
import TableTitle from "./TableTitle.tsx";
import TableToolbar from "./TableToolbar.tsx";
import Table from "./Table.tsx";
import TableBottomBar from "./TableBottomBar.tsx";
import styled from "styled-components";

const StyledRoot = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");
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
