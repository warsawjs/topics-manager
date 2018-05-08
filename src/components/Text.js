import React from 'react';
import styled from 'styled-components';
import Colors from "../styles/Colors";

const Text = props => (
    <StyledText margin={props.margin} type={props.type || 'default'} color={props.color} display={props.display}>
        { props.children }
    </StyledText>
);

const style = {
    primary: {
        fontSize: '28',
        color: Colors.black,
    },
    secondary: {
        fontSize: '18',
        color: Colors.black,
    },
    basic: {
        fontSize: '14',
        color: Colors.grey,
    },
    default: {
        fontSize: '12',
        color: Colors.grey,
    }
}

const StyledText = styled.p`
    display: ${props => props.display || 'block'}
    font-size: ${props => style[props.type].fontSize}px;
    color: ${props => props.color || style[props.type].color};
    line-height: ${props => style[props.type].fontSize * 1.2}px
    margin: ${props => props.margin}
`;

export default Text;