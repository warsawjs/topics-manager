import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {

    render() {
        return (
            this.props.type === 'primary' ?
                <PrimaryButton onClick={this.props.onClick}>{this.props.children}</PrimaryButton>
                : <SecondaryButton onClick={this.props.onClick}>{this.props.children}</SecondaryButton>
        );
    }

}

const BasicButton = styled.button`
    border: none;
`;

const PrimaryButton = BasicButton.extend`
  background-color: red;
  color: #fff;
`;

const SecondaryButton = BasicButton.extend`
  backround-color: yellow;
  color: #000;
`;



export default Button;