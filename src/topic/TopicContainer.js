import React from 'react';
import PropTypes from 'prop-types';
import TopicsList from './components/TopicsList';
import { getTopics } from '../actions/topic.actions';
import { connect } from 'react-redux';
import TopicModel from '../shared/models/TopicModel';
import Container from '../shared/components/Container';


// tests for actions & thunk's dispatching
class TopicContainer extends React.Component {

    componentDidMount() {
        this.props.getTopics();
    }

    render() {
        const { topics, pending, error } = this.props;
        return (
            <Container type="section">
                {error && <p>{error}</p>}
                {!error && <TopicsList pending={pending} topics={topics}/>}
            </Container>
        );
    }
}

const mapStateToProps = ({ topic }) => ({
    topics: topic.topics,
    pending: topic.pending,
    error: topic.error
});

const mapDispatchToProps = dispatch => ({
    getTopics: () => dispatch(getTopics())
});

TopicContainer.propTypes = {
    getTopics: PropTypes.func.isRequired,
    topics: PropTypes.arrayOf(PropTypes.instanceOf(TopicModel)),
    pending: PropTypes.bool.isRequired,
    error: PropTypes.any
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
