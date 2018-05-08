import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from "../styles/Colors";

class Button extends Component {

    render() {
        return (
            <Text type={this.props.type || 'default'} color={this.props.color} display={this.props.display}>
                { this.props.children }
            </Text>
        );
    }

}
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

const Text = styled.p`
    display: ${props => props.display || 'block'}
    font-size: ${props => style[props.type].fontSize}px;
    color: ${props => props.color || style[props.type].color};
    line-height: ${props => style[props.type].fontSize * 1.2}px
`;

export default Button;