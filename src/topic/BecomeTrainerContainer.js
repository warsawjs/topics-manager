import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopicModel from '../shared/models/TopicModel';
import { UserModel } from '../shared/models/UserModel';
import PrimaryButton from '../lib/PrimaryActionButton';
import { becomeTrainer, signOffTrainer } from '../actions/trainer.actions';

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
        const alreadyAttending = topic.amITrainer(user);
        return (
            <div>
                {alreadyAttending && (
                    <PrimaryButton onClick={this.leave}>
                        Rezygnuję
                    </PrimaryButton>
                )}
                {!alreadyAttending && (
                    <PrimaryButton onClick={this.attend}>
                        Chcę być trenerem
                    </PrimaryButton>
                )}
            </div>
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
    user: PropTypes.instanceOf(UserModel).isRequired,
    topic: PropTypes.instanceOf(TopicModel).isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BecomeTrainerContainer);
