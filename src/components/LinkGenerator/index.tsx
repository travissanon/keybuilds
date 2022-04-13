import * as React from "react";
import styled from "styled-components";
import { Link } from '@carbon/icons-react';

enum Colors {
  Black = "#161616",
  Grey = "#525252",
  LightGrey = "#f4f4f4",
  OtherLightGray = "#A8A8A8"
}

const StyledLinkGenerator = styled.div`
  background-color: ${Colors.LightGrey};
  font-family: "IBM Plex Sans", sans-serif;
  margin: 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 14px;
  }

  span {
    color: ${Colors.OtherLightGray}
  }
`;

export interface ILinkGeneratorProps {}

export default function LinkGenerator(props: ILinkGeneratorProps) {
  return (
    <StyledLinkGenerator>
      <Link size={20} />
      <span>https://keybuilds.com/list/2B4wn7</span>
    </StyledLinkGenerator>
  );
}
