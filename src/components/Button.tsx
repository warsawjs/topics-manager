import React, { SFC } from 'react';
import styled from 'styled-components';
import Colors from '../styles/colors';

export enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
}

export interface IButtonProps {
    kind?: ButtonType,
}

type Properties = IButtonProps & React.AllHTMLAttributes<HTMLButtonElement>

const Button: SFC<Properties> = (props) => {
    switch (props.kind) {
        case ButtonType.Primary:
            return <PrimaryButton {...props} onClick={props.onClick}>
                {props.children}
            </PrimaryButton>;
        case ButtonType.Secondary:
            return <SecondaryButton {...props} onClick={props.onClick}>
                {props.children}
            </SecondaryButton>;
        default:
            return null;
    }
};

const BasicButton = styled.button`
    border: none;
    padding: 15px;
    font-size: 14px;
    min-width: 180px;
    text-transform: uppercase;
    &:hover {
        box-shadow: 3px 7px 20px 0 rgba(0, 0, 0, 0.2);
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

export default Button;
