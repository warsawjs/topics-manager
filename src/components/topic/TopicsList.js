import React from 'react';
import Section from '../Section';
import Text from '../Text';
import Topic from './Topic';

const TopicsList = props => (
    <Section>
        <Text type="primary">Zgłoszone tematy</Text>
        <Topic/>
    </Section>
);

export default TopicsList;
