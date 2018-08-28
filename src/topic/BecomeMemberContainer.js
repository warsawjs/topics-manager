import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopicModel from '../shared/models/TopicModel';
import { becomeMember, leaveTopic } from '../actions/member.actions';
import 'react-awesome-popover/dest/react-awesome-popover.css';
import JoinWorkshopContainer from './components/JoinWorkshopContainer';
import { UserModel } from '../shared/models/UserModel';

class BecomeMemberContainer extends React.Component {
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
                alreadyAttending={topic.amIAttending(user)}
                anonymous={!user}
                joinText="Chcę być uczestnikiem"
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
    attend: (topic, user) => dispatch(becomeMember(topic, user)),
    leave: (topic, user) => dispatch(leaveTopic(topic, user)),
});

BecomeMemberContainer.propTypes = {
    attend: PropTypes.func.isRequired,
    leave: PropTypes.func.isRequired,
    user: PropTypes.instanceOf(UserModel),
    topic: PropTypes.instanceOf(TopicModel).isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BecomeMemberContainer);
