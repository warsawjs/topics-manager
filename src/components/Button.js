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
    padding: 5px 15px;
    font-size: 12px;
    border-radius: 3px;
    min-width: 70px;
`;

const PrimaryButton = BasicButton.extend`
  background-color: #F7302F;
  color: #fff;
`;

const SecondaryButton = BasicButton.extend`
  backround-color: #FAE452;
  color: #000;
`;

export default Button;