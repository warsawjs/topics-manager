import React, { SFC } from 'react';
import { connect } from 'react-redux';
import Section from '../components/Section';
import { Topic } from '../shared/models/topic';
import TopicsList from './components/TopicsList';

export interface TopicContainerProps {
    topics: Topic[],
    pending: boolean,
    error?: any,
}

export const TopicContainer: SFC<TopicContainerProps> = ({ topics, pending, error }) => (
    <Section>
        {error && <p>{error}</p>}
        {!error && <TopicsList pending={pending} topics={topics}/>}
    </Section>
);

const mapStateToProps = ({ topic }) => ({
    topics: topic.topics,
    pending: topic.pending,
    error: topic.error,
});

export default connect(mapStateToProps)(TopicContainer);
