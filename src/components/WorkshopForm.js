import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Text from './Text';
import Colors from '../styles/Colors';
import Section from './Section';

import TopicModel from '../shared/models/TopicModel';
import {GithubUserModel} from '../shared/models/GithubUserModel';

class WorkshopForm extends React.Component {

    state = {
        title: '',
        description: ''
    };

    _onChange = (key, event) => {
        this.setState({
            [key]: event.target.value
        });
    };

    render() {
        const {onClick, author} = this.props;
        const {title, description} = this.state;

        return (
            <Section background={Colors.yellow}>
                <Text type="secondary">Zgłoś propozycję warsztatów</Text>
                <Textarea placeholder="Temat" value={title} onChange={(e) => this._onChange('title', e)}/>
                <Textarea placeholder="Opis" value={description} height="200px" onChange={(e) => this._onChange('description', e)}/>
                <Button type="primary" onClick={() => {
                    onClick(TopicModel.fromBackendData({
                        title,
                        description
                    }), author);
                }}>Wyślij</Button>
            </Section>

        );
    }
}

const Textarea = styled.textarea`
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: ${props => props.height}
    margin: 10px 0;
    border-radius: 3px;
    border: none;
`;

WorkshopForm.propTypes = {
    onClick: PropTypes.func.isRequired,
    author: PropTypes.instanceOf(GithubUserModel).isRequired
};

export default WorkshopForm;
