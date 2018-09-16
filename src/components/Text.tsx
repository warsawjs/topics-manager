import React, { SFC } from 'react';
import styled, { StyledFunction } from 'styled-components';
import Colors from '../styles/colors';

export enum TextType {
    Primary = 'primary',
    Secondary = 'secondary',
    Basic = 'basic',
    Default = 'default',
    Header = 'header',
    Logo = 'logo',
}

export interface OwnProps {
    kind?: TextType,
}

export type Properties = OwnProps & React.AllHTMLAttributes<HTMLParagraphElement>


const Text: SFC<Properties> = ({ kind, ...rest }) => {
    const TextComponent = `${TextType.Default}`;
    return (<TextComponent {...rest}>
        {rest.children}
    </TextComponent>);
};

const P: StyledFunction<OwnProps> = styled.p;

const Base = P`
    display: block;
    font-size: 20pt;
    font-weight: 300;
    color: ${Colors.grey};
`;

// @ts-ignore
const Primary = Base.extend`
    font-size: 30pt;
    font-weight: bold;
    color: ${Colors.black};
`;

// @ts-ignore
const Secondary = Base.extend`
    font-size: 24pt;
    font-weight: 300;
    color: ${Colors.grey};
`;

// @ts-ignore
const Basic = Base.extend`
    font-size: 20pt;
    font-weight: 300;
    color: ${Colors.grey};
`;

// @ts-ignore
const Header = Base.extend`
    font-size: 65pt;
    font-weight: bold;
    color: ${Colors.grey};
`;

// @ts-ignore
const Logo = Base.extend`
    font-size: 65pt;
    color: ${Colors.white};
    font-family: 'Fira Sans',sans-serif;
`;


export default Text;
