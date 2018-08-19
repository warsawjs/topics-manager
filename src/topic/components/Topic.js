import React from 'react';
import TopicDescription from './TopicDescription';
import TrainersList from './TrainersList';
import styled from 'styled-components';
import Participants from './Participants';
import PropTypes from 'prop-types';
import TopicModel from '../../shared/models/TopicModel';

const Topic = ({ topic }) => (
    <RowWrapper>
        <TopicDescription title={topic.title} description={topic.description} />
        <TrainersList
            trainers={topic.trainers}
            author={topic.author}
            topic={topic}
        />
        <Participants topic={topic} likes={topic.members.length} />
    </RowWrapper>
);

Topic.propTypes = {
    topic: PropTypes.instanceOf(TopicModel).isRequired,
};

const RowWrapper = styled.div`
    width: 100%;
    padding: 70px 0;
    display: flex;
    flex: start;
    justify-content: space-between;
    text-align: left;
    border-bottom: 1px solid #e1e1e1;
`;

export default Topic;
