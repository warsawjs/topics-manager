import React, { SFC } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import ActivityIndicator from '../../shared/components/ActivityIndicator';
import { Topic as TopicInterface } from '../../shared/models/topic';
import Topic from './Topic';

export interface TopicListProps {
    topics: TopicInterface[],
    pending: boolean,
}

const HeadingText = styled(Text)`
    margin: 20px 0;
`;

const TopicsList: SFC<TopicListProps> = ({ topics = [], pending = false }) => (
    <React.Fragment>
        <HeadingText type="header">
            Zgłoszone tematy
        </HeadingText>
        {pending && <ActivityIndicator/>}
        {topics.map((topic, index) => <Topic key={index} topic={topic}/>)}
    </React.Fragment>
);

export default TopicsList;
