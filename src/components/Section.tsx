import React, { SFC } from 'react';
import styled from 'styled-components';

export interface SectionProps {
    backgroundColor?: string,
}

type Properties = SectionProps & React.AllHTMLAttributes<HTMLDivElement>

const Section : SFC<Properties> = props => (
    <Background {...props}>
        <Container>{props.children}</Container>
    </Background>
);

const Background = styled<SectionProps, 'section'>('section')`
    background-color: ${props => props.backgroundColor || '#fff'};
    color: black;
`;

const Container = styled.div`
    margin: auto;
    padding: 30px;
    max-width: 1150px;
`;

export default Section;
