import * as React from "react";
import styled from "styled-components";

const StyledTableToolbar = styled.div`
  background-color: blue;
`;

export interface ITableToolbarProps {}

export default function TableToolbar(props: ITableToolbarProps) {
  return <StyledTableToolbar></StyledTableToolbar>;
}
