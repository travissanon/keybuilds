import * as React from 'react';
import { Add } from '@carbon/icons-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledChoosePartButton = styled.button`
    background-color: #0F62FE;
    border: none;
    padding: 7px 16px;
    color: #fff;
    display: flex;
    align-items: center;

    svg {
        padding-left: 24px;
    }
`;

export default function ChoosePartButton () {
    return (
        <StyledChoosePartButton>
            Choose a part
            <Add size={16} />
        </StyledChoosePartButton>
    )
}