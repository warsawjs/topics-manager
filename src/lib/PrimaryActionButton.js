import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ActionButton = styled.button`
    width: 201px;
    height: 40px;
    background-color: #e6cf42;
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

PrimaryButton.propTypes = {
    children: PropTypes.any,
};

export default PrimaryButton;
