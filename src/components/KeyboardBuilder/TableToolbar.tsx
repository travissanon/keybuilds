import * as React from "react";
import styled from "styled-components";
import LinkGenerator from "./LinkGenerator.tsx";

enum Colors {
  Black = "#161616",
  Grey = "#525252",
  LightGrey = "#f4f4f4",
}

const StyledTableToolbar = styled.div`
  background-color: ${Colors.LightGrey};
  font-family: "IBM Plex Sans", sans-serif;
  padding: 14px;
  margin: 0;
`;

export interface ITableToolbarProps {}

export default function TableToolbar(props: ITableToolbarProps) {
  return (
    <StyledTableToolbar>
      <LinkGenerator />
      <span>Utilities</span>
    </StyledTableToolbar>
  );
}
