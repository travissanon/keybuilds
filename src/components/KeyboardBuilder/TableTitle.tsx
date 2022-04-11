import * as React from "react";
import styled from "styled-components";

const StyledTableTitle = styled.div`
  background-color: pink;
`;

export interface ITableTitleProps {
  title: string;
  subtitle: string;
}

export default function TableTitle(props: ITableTitleProps) {
  const { title, subtitle } = props;

  return (
    <StyledTableTitle>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </StyledTableTitle>
  );
}
