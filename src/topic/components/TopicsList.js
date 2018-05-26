import React from 'react';
import Section from '../../components/Section';
import Text from '../../components/Text';
import Topic from './Topic';
import PropTypes from 'prop-types';
import TopicModel from '../../shared/models/TopicModel';

const TopicsList = ({topics}) => (
    <Section>
        <Text type="primary">Zgłoszone tematy</Text>
        {topics.map((topic, index) => <Topic key={index} topic={topic}/>)}
    </Section>
);

TopicsList.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.instanceOf(TopicModel)).isRequired
};

TopicsList.defaultProps = {
    topics: []
};

export default TopicsList;
