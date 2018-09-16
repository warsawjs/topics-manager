import React, { SFC } from 'react';
import { connect } from 'react-redux';
import { submitTopic } from '../actions/topic.actions';
import WorkshopForm from '../components/WorkshopForm';
import { TopicMetadata } from '../shared/models/topic-metadata';
import { User } from '../shared/models/user';

export interface WorkshopContainerProps {
    submitTopic: (topic: TopicMetadata, author: User) => undefined,
    author: User,
    logged: boolean,
}

export const WorkshopContainer: SFC<WorkshopContainerProps> = (props) =>
    <WorkshopForm
        logged={props.logged}
        onClick={props.submitTopic}
        author={props.author}/>;

const mapDispatchToProps = dispatch => ({
    submitTopic: (topic, author) => dispatch(submitTopic(topic, author)),
});

const mapStateToProps = state => ({
    author: state.auth.user,
    logged: state.auth.logged,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorkshopContainer);
