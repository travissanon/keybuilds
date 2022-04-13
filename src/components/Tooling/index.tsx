import * as React from 'react';
import styled from 'styled-components';
import { Search, Download, Settings } from '@carbon/icons-react';

const StyledTooling = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin: 0 14px;
    }
`;

export interface IToolingProps {
}

export default function Tooling (props: IToolingProps) {
  return (
    <StyledTooling>
        <Search size={20} />
        <Download size={20} />
        <Settings size={20} />
    </StyledTooling>
  );
}
