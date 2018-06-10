import React from 'react';
import Text from '../../components/Text';
import Topic from './Topic';
import PropTypes from 'prop-types';
import TopicModel from '../../shared/models/TopicModel';
import ActivityIndicator from '../../shared/components/ActivityIndicator';

const TopicsList = ({ topics, pending }) => (
    <React.Fragment>
        <Text type='primary'>Zgłoszone tematy</Text>
        {pending && <ActivityIndicator/>}
        <ul>
            {topics.map((topic, index) => <Topic key={index} topic={topic}/>)}
        </ul>
    </React.Fragment>
);

TopicsList.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.instanceOf(TopicModel)).isRequired,
    pending: PropTypes.bool
};

TopicsList.defaultProps = {
    topics: [],
    pending: false
};

export default TopicsList;
