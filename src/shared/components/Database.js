import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { topicFetchInit, topicsFetched } from '../../actions/topic.actions';
import FirebaseService from '../services/FirebaseService';

class Database extends React.Component {
    componentDidMount() {
        this.props.fetchTopicsInit();
        FirebaseService.listenOnTopicAdded(this.props.topicsFetched);
    }

    componentWillUnmount() {
        FirebaseService.removeAllListeners();
    }

    render() {
        return <div />;
    }
}

Database.propTypes = {
    topicsFetched: PropTypes.func.isRequired,
    fetchTopicsInit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    topicsFetched: topics => dispatch(topicsFetched(topics)),
    fetchTopicsInit: () => dispatch(topicFetchInit()),
});

export default connect(
    null,
    mapDispatchToProps
)(Database);
