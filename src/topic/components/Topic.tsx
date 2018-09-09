import React, { SFC } from 'react';
import styled from 'styled-components';
import { Topic } from '../../shared/models/topic';
import Participants from './Participants';
import TopicDescription from './TopicDescription';
import TrainersList from './TrainersList';

export interface TopicProps {
    topic: Topic
}

const Topic: SFC<TopicProps> = ({ topic }) => (
    <RowWrapper>
        <TopicDescription title={topic.title} description={topic.description}/>
        <TrainersList
            trainers={topic.trainers}
            author={topic.author}
            topic={topic}
        />
        <Participants topic={topic} likes={topic.members.length}/>
    </RowWrapper>
);

const RowWrapper = styled.div`
    width: 100%;
    padding: 70px 0;
    display: flex;
    justify-content: space-between;
    text-align: left;
    border-bottom: 1px solid #e1e1e1;
`;

export default Topic;
