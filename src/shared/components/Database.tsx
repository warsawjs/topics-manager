import React from 'react';
import { connect } from 'react-redux';
import { topicFetchInit, topicsFetched } from '../../actions/topic.actions';
import FirebaseService, { CallbackFunction } from '../services/firebase.service';

export interface DatabaseProps {
    topicsFetched: CallbackFunction,
    fetchTopicsInit: () => undefined,
}

class Database extends React.Component<DatabaseProps> {
    public componentDidMount() {
        this.props.fetchTopicsInit();
        FirebaseService.listenOnTopicAdded(this.props.topicsFetched);
    }

    public componentWillUnmount() {
        FirebaseService.removeAllListeners();
    }

    public render() {
        return <div/>;
    }
}

const mapDispatchToProps = dispatch => ({
    topicsFetched: topics => dispatch(topicsFetched(topics)),
    fetchTopicsInit: () => dispatch(topicFetchInit()),
});

export default connect(
    null,
    mapDispatchToProps,
)(Database);
