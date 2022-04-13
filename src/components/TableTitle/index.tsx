import * as React from "react";
import styled from "styled-components";

enum Colors {
  Black = "#161616",
  Grey = "#525252",
  LightGrey = "#f4f4f4",
}

const StyledTableTitle = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  background-color: ${Colors.LightGrey};
  height: 5.25rem;
  padding: 0;
  margin: 0;
  text-align: left;

  h1 {
    font-size: 1.25rem;
    padding: 1rem 1rem 0 1rem;
    margin: 0;
    font-weight: 400;
    color: ${Colors.Black};
  }

  h2 {
    font-size: 0.875rem;
    padding: 0 1rem 1.5rem 1rem;
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
