import React, { Component } from 'react';
import styled from 'styled-components';
import Button from "./Button";
import Section from "./Section";
import Text from "./Text";

class WorkshopForm extends Component {

    render() {
        return (
            <Section background={'#FAE452'}>
                <Text type="secondary">Zgłoś propozycję warsztatów</Text>
                <WorkshopTitle/>
                <WorkshopDescription/>
                <Button type="primary">Wyślij</Button>
            </Section>
        );
    }
}

const Textarea = styled.textarea`
    width: 100%;
    margin: 10px 0;
    border-radius: 3px;
    border: none;
`;
const WorkshopTitle = Textarea.extend`
    
`;
const WorkshopDescription = Textarea.extend`
    height: 200px;
`;

export default WorkshopForm;