import React from 'react';
import styled from 'styled-components';
import Colors from "../styles/Colors";

const Button = props => (
    props.type === 'primary' ?
        <PrimaryButton {...props} onClick={props.onClick}>{props.children}</PrimaryButton>
        : <SecondaryButton {...props} onClick={props.onClick}>{props.children}</SecondaryButton>
);

const BasicButton = styled.button`
    border: none;
    padding: 5px 15px;
    font-size: 12px;
    border-radius: 3px;
    min-width: 70px;
    margin-left: ${props => props.marginLeft};
`;

const PrimaryButton = BasicButton.extend`
  background-color: ${Colors.red};
  color: ${Colors.white};
`;

const SecondaryButton = BasicButton.extend`
  backround-color: ${Colors.yellow};
  color: ${Colors.black};
`;

export default Button;