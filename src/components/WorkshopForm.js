import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Text from './Text';
import Colors from '../styles/Colors';
import Section from './Section';

import TopicModel from '../shared/models/TopicModel';
import { GithubUserModel } from '../shared/models/GithubUserModel';

class WorkshopForm extends React.Component {
    state = {
        title: '',
        description: '',
    };

    _onChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        });
    };

    render() {
        const { onClick, author } = this.props;
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
                        onChange={e => this._onChange('title', e)}
                    />
                    <Textarea
                        placeholder="Opis"
                        value={description}
                        height="200px"
                        onChange={e => this._onChange('description', e)}
                    />
                </Centered>
                <RightAligned>
                    <Button
                        type="primary"
                        onClick={() => {
                            onClick(
                                TopicModel.fromBackendData({
                                    title,
                                    description,
                                }),
                                author
                            );
                        }}
                    >
                        Wyślij
                    </Button>
                </RightAligned>
            </Section>
        );
    }
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
    author: PropTypes.instanceOf(GithubUserModel).isRequired,
};

export default WorkshopForm;
