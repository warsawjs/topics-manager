import React from 'react';
import styled from 'styled-components';

export const ActionButton = styled.button`
    width: 201px;
    height: 40px;
    background-color: #e6cf42;
    &:disabled {
        background-color: #7f7f7f;
    }

    &:disabled > span {
        color: white;
    }
`;

export const ActionButtonSpanText = styled.span`
    width: 134px;
    height: 16px;
    font-family: Lato;
    font-size: 14px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #464646;
`;

const PrimaryButton = props => (
    <ActionButton {...props}>
        <ActionButtonSpanText>{props.children}</ActionButtonSpanText>{' '}
    </ActionButton>
);

export default PrimaryButton;
