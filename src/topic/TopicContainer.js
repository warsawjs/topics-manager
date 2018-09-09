import React from 'react';
import PropTypes from 'prop-types';
import TopicsList from './components/TopicsList';
import { connect } from 'react-redux';
import Topic from '../shared/models/topic';
import Section from '../components/Section';

class TopicContainer extends React.Component {
    render() {
        const { topics, pending, error } = this.props;
        return (
            <Section>
                {error && <p>{error}</p>}
                {!error && <TopicsList pending={pending} topics={topics} />}
            </Section>
        );
    }
}

const mapStateToProps = ({ topic }) => ({
    topics: topic.topics,
    pending: topic.pending,
    error: topic.error,
});

TopicContainer.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.instanceOf(TopicModel)),
    pending: PropTypes.bool.isRequired,
    error: PropTypes.any,
};

export default connect(mapStateToProps)(TopicContainer);
