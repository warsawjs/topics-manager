import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../styles/Colors';

const Text = props => (
    <StyledText
        margin={props.margin}
        type={props.type || 'default'}
        color={props.color}
        display={props.display}
        decoration={props.decoration}
    >
        {props.children}
    </StyledText>
);

const style = {
    primary: {
        fontSize: '30',
        fontWeight: 'bold',
        color: Colors.black,
    },
    secondary: {
        fontSize: '24',
        fontWeight: 300,
        color: '#464646',
    },
    basic: {
        fontSize: '20',
        fontWeight: 300,
        color: Colors.grey,
    },
    default: {
        fontSize: '16',
        fontWeight: 300,
        color: Colors.grey,
    },
    header: {
        fontSize: '65',
        fontWeight: 'bold',
        color: '#464646',
    },
    logo: {
        fontFamily: 'Fira Sans',
        color: Colors.white,
        fontSize: '32',
    },
};

const StyledText = styled.p`
    display: ${props => props.display || 'block'};
    font-family: ${props => style[props.type].fontFamily};
    font-size: ${props => style[props.type].fontSize}px;
    font-weight: ${props => style[props.type].fontWeight};
    color: ${props => props.color || style[props.type].color};
    line-height: ${props => style[props.type].fontSize * 1.5}px;
    text-decoration: ${props => props.decoration};
    margin: ${props => props.margin};
`;

Text.propTypes = {
    margin: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.string,
    decoration: PropTypes.string,
    children: PropTypes.node,
};

export default Text;
