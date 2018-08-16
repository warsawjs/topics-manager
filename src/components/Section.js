import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Section = props => (
    <Background background={props.background}>
        <Container>{props.children}</Container>
    </Background>
);

const Background = styled.section`
    background-color: ${props => props.background || '#fff'};
    color: black;
`;

const Container = styled.div`
    margin: auto;
    padding: 30px;
    max-width: 1150px;
`;

Section.propTypes = {
    background: propTypes.string,
    children: propTypes.node,
};

export default Section;
