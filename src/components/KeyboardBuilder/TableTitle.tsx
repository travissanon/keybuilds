import * as React from "react";
import styled from "styled-components";

enum Colors {
  Black = "#161616",
  Grey = "#525252",
}

const StyledTableTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");

  font-family: "IBM Plex Sans", sans-serif;
  background-color: #f4f4f4;
  height: 84px;
  padding: 0;
  margin: 0;
  text-align: left;

  h1 {
    font-size: 20px;
    padding: 16px 16px 0 16px;
    margin: 0;
    font-weight: 400;
    color: ${Colors.Black};
  }

  h2 {
    font-size: 14px;
    padding: 0 16px 24px 16px;
    margin: 0;
    font-weight: 400;
    color: ${Colors.Grey};
  }
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
