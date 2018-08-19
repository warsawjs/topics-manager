import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopicModel from '../shared/models/TopicModel';
import { becomeMember, leaveTopic } from '../actions/member.actions';
import { UserModel } from '../shared/models/UserModel';
import PrimaryButton from '../lib/PrimaryActionButton';

class BecomeMemberContainer extends React.Component {
    leaveTopic = () => {
        const { topic, user, leave } = this.props;
        leave(topic, user);
    };

    attendTopic = () => {
        const { topic, user, attend } = this.props;
        attend(topic, user);
    };

    render() {
        const { topic, user } = this.props;
        const alreadyAttending = topic.amIAttending(user);
        return (
            <div>
                {alreadyAttending && (
                    <PrimaryButton onClick={this.leaveTopic}>
                        Rezygnuję
                    </PrimaryButton>
                )}
                {!alreadyAttending && (
                    <PrimaryButton onClick={this.attendTopic}>
                        Chcę być uczestnikiem
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
    attend: (topic, user) => dispatch(becomeMember(topic, user)),
    leave: (topic, user) => dispatch(leaveTopic(topic, user)),
});

BecomeMemberContainer.propTypes = {
    attend: PropTypes.func.isRequired,
    leave: PropTypes.func.isRequired,
    user: PropTypes.instanceOf(UserModel).isRequired,
    topic: PropTypes.instanceOf(TopicModel).isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BecomeMemberContainer);
