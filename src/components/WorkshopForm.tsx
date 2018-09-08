import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { GithubUser } from '../shared/models/github-user';

import TopicModel from '../shared/models/TopicModel';
import { withAuthPopover } from '../shared/withAuthPopover';
import Colors from '../styles/Colors';
import Button from './Button';
import Section from './Section';
import Text from './Text';

class WorkshopForm extends React.Component {
    public state = {
        title: '',
        description: '',
    };

    public render() {
        const { onClick, author, logged } = this.props;
        const { title, description } = this.state;

        return (
            <Section background={Colors.yellow}>
                <Centered>
                    <Text type="primary" margin="0 0 20px 0">
                        Zgłoś propozycję warsztatów
                    </Text>
                    <Textarea
                        placeholder="Temat"
                        value={title}
                        onChange={e => this.onChange('title', e)}
                    />
                    <Textarea
                        placeholder="Opis"
                        value={description}
                        height="200px"
                        onChange={e => this.onChange('description', e)}
                    />
                </Centered>
                <RightAligned>
                    {this.enableTooltipForAnonymous(
                        !logged,
                        <Button
                            type="primary"
                            disabled={!logged}
                            onClick={() => {
                                onClick(
                                    TopicModel.fromBackendData({
                                        title,
                                        description,
                                    }),
                                    author,
                                );
                            }}
                        >
                            Wyślij
                        </Button>,
                    )}
                </RightAligned>
            </Section>
        );
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

const Textarea = styled.textarea`
    display: block;
    width: 100%;
    max-width: 780px;
    resize: none;
    height: ${props => props.height};
    margin: 40px auto;
    border-radius: 3px;
    border: none;
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

WorkshopForm.propTypes = {
    onClick: PropTypes.func.isRequired,
    author: PropTypes.instanceOf(GithubUser).isRequired,
    logged: PropTypes.bool.isRequired,
};

export default WorkshopForm;
