import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitTopic } from '../actions/topic.actions';
import WorkshopForm from '../components/WorkshopForm';
import { GithubUserModel } from '../shared/models/GithubUserModel';

class WorkshopContainer extends React.Component {
    render() {
        return (
            <div>
                <WorkshopForm
                    onClick={this.props.submitTopic}
                    author={this.props.author}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    submitTopic: (topic, author) => dispatch(submitTopic(topic, author)),
});

const mapStateToProps = state => ({
    author: state.auth.user,
});

WorkshopContainer.propTypes = {
    submitTopic: PropTypes.func.submitTopic,
    author: PropTypes.instanceOf(GithubUserModel).isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkshopContainer);
