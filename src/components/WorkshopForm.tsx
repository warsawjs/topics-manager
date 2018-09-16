import React from 'react';
import styled from 'styled-components';
import { User } from '../shared/models/user';
import { withAuthPopover } from '../shared/withAuthPopover';
import Colors from '../styles/colors';
import Button from './Button';
import Section from './Section';
import Text from './Text';

export interface WorkshopFormProps {
    author: User,
    logged: boolean,
    onClick: (TopicMetadata, User) => undefined
}

type Properties = WorkshopFormProps

const Heading = styled(Text)`
    margin: 0 0 20px 0;
`;

class WorkshopForm extends React.Component<Properties> {
    public state = {
        title: '',
        description: '',
    };

    public onClick = () => {
        const { onClick, author } = this.props;
        const { title, description } = this.state;
        onClick({
                title,
                description,
            },
            author,
        );
    };

    public render() {
        const { logged } = this.props;
        const { title, description } = this.state;

        return (
            <Section backgroundColor={Colors.yellow}>
                <Centered>
                    <Heading type="primary">
                        Zgłoś propozycję warsztatów
                    </Heading>
                    <Input
                        placeholder="Temat"
                        value={title}
                        onChange={this.changeTitle}
                    />
                    <TopicDescriptionInput
                        placeholder="Opis"
                        value={description}
                        onChange={this.changeDescription}
                    />
                </Centered>
                <RightAligned>
                    {this.enableTooltipForAnonymous(
                        !logged,
                        <Button
                            type="primary"
                            disabled={!logged}
                            onClick={this.onClick}
                        >
                            Wyślij
                        </Button>,
                    )}
                </RightAligned>
            </Section>
        );
    };

    private changeTitle = (e) => {
        this.onChange('title', e);
    };

    private changeDescription = (e) => {
        this.onChange('description', e);
    };

    private onChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        });
    };

    private enableTooltipForAnonymous = (anonymous, component) => {
        return anonymous ? withAuthPopover(component) : component;
    };
}

const Input = styled.textarea`
    display: block;
    width: 100%;
    max-width: 780px;
    resize: none;
    margin: 40px auto;
    border-radius: 3px;
    border: none;
`

const TopicDescriptionInput = Input.extend`
    height: 200px;
`;
const Centered = styled.div`
    text-align: center;
`;
const RightAligned = styled.div`
    width: 100%;
    max-width: 780px;
    margin: auto;
    text-align: right;
`;

export default WorkshopForm;
