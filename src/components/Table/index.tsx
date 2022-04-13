import * as React from "react";
import styled from "styled-components";
import { Edit, Close } from '@carbon/icons-react';

const StyledTable = styled.table`
  background-color: lightgray;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  border-collapse: collapse;
  background-color: #F4F4F4;
  width: 100%;

  tr {}

  th {
    padding: 16px 16px 30px;
    background-color: #E0E0E0;
    color: #161616;
    text-align: left;
  }

  td {
    background-color: #F4F4F4;
    padding: 16px 16px 30px;
    text-align: left;
    font-weight: 400;
    color: #525252;

    svg {
        padding-left: 20px;
    }

    button {
        background-color: #0F62FE;
        border: none;
        padding: 7px 16px;
        color: #fff;
    }
  }

  .part {
    font-weight: 700;
  }
`;

export interface ITableProps {}

export default function Table(props: ITableProps) {
  return (
    <StyledTable cellspacing="0" cellpadding="0">
        <tr>
            <th>Part</th>
            <th>Selection</th>
            <th>Store</th>
            <th>Price</th>
            <th></th>
        </tr>
        <tr>
            <td className="part">Case</td>
            <td>Tofu84 Mechanical Keyboard Case</td>
            <td>KBDFans</td>
            <td>$34.99</td>
            <td>
                <button>Buy</button>
                <Edit />
                <Close />
            </td>
        </tr>
        <tr>
            <td className="part">Circuit Board (PCB)</td>
            <td>DZ60 Soldered 60% Mechanical Keyboard PCB</td>
            <td>KBDFans</td>
            <td>$36.89</td>
            <td>
                <button>Buy</button>
                <Edit />
                <Close />
            </td>
        </tr>
    </StyledTable>
  );
}
