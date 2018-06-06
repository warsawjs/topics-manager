import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Container from '../shared/components/Container';
import Text from './Text';
import Colors from '../styles/Colors';

const WorkshopForm = () => (
    <Container type="section" backgroundColor={ Colors.yellow }>
        <Text type="secondary">Zgłoś propozycję warsztatów</Text>
        <Textarea placeholder="Temat"/>
        <Textarea placeholder="Opis" height="200px"/>
        <Button type="primary">Wyślij</Button>
    </Container>
);

const Textarea = styled.textarea`
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: ${props => props.height}
    margin: 10px 0;
    border-radius: 3px;
    border: none;
`;

export default WorkshopForm;
