import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../styles/Colors';

const Button = props =>
    props.type === 'primary' ? (
        <PrimaryButton {...props} onClick={props.onClick}>
            {props.children}
        </PrimaryButton>
    ) : (
        <SecondaryButton {...props} onClick={props.onClick}>
            {props.children}
        </SecondaryButton>
    );

const BasicButton = styled.button`
    border: none;
    padding: 15px;
    font-size: 14px;
    min-width: 180px;
    text-transform: uppercase;
    margin-left: ${props => props.marginLeft};
    &:hover {
        box-shadow: 3px 7px 20px 0px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;

const PrimaryButton = BasicButton.extend`
    background-color: ${Colors.red};
    color: ${Colors.white};
`;

const SecondaryButton = BasicButton.extend`
    background-color: ${Colors.yellow};
    color: ${Colors.black};
`;

Button.propTypes = {
    marginLeft: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default Button;
