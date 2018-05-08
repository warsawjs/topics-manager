import React, { Component } from 'react';
import styled from 'styled-components';

class Section extends Component {

    render() {
        return (
            <Background background={this.props.background}>
                <Container>
                    { this.props.children }
                </Container>
            </Background>
        );
    }
}

const Background = styled.section`
    background-color: ${props => props.background || '#fff'};
    color: black;
`;

const Container = styled.div`
    margin: auto;
    padding: 30px;
    max-width: 600px;
`;

export default Section;