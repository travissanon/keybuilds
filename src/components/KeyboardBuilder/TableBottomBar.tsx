import * as React from "react";
import styled from "styled-components";

const StyledTableBottomBar = styled.div`
  background-color: green;
`;

export interface ITableBottomBarProps {}

export default function TableBottomBar(props: ITableBottomBarProps) {
  return <StyledTableBottomBar></StyledTableBottomBar>;
}
