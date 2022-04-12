import * as React from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  background-color: lightgray;
`;

export interface ITableProps {}

export default function Table(props: ITableProps) {
  return <StyledTable></StyledTable>;
}
