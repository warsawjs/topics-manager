import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopicModel from '../shared/models/TopicModel';
import { becomeTrainer, signOffTrainer } from '../actions/trainer.actions';
import JoinWorkshopContainer from './components/JoinWorkshopContainer';
import { UserModel } from '../shared/models/UserModel';

class BecomeTrainerContainer extends React.Component {
    leave = () => {
        const { topic, user, leave } = this.props;
        leave(topic, user);
    };

    attend = () => {
        const { topic, user, attend } = this.props;
        attend(topic, user);
    };

    render() {
        const { topic, user } = this.props;
        return (
            <JoinWorkshopContainer
                alreadyAttending={topic.amITrainer(user)}
                anonymous={!user}
                joinText="Chcę być trenerem"
                leaveText="Rezygnuję"
                attend={this.attend}
                leave={this.leave}
            />
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    attend: (topic, user) => dispatch(becomeTrainer(topic, user)),
    leave: (topic, user) => dispatch(signOffTrainer(topic, user)),
});

BecomeTrainerContainer.propTypes = {
    attend: PropTypes.func.isRequired,
    leave: PropTypes.func.isRequired,
    user: PropTypes.instanceOf(UserModel),
    topic: PropTypes.instanceOf(TopicModel).isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BecomeTrainerContainer);
