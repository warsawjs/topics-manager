import React from 'react';
import 'react-awesome-popover/dest/react-awesome-popover.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { becomeMember, leaveTopic } from '../actions/member.actions';
import { isAttending, Topic } from '../shared/models/topic';
import { User } from '../shared/models/user';
import { JoinWorkshopContainer } from './components/JoinWorkshopContainer';

interface OwnProps {
    topic: Topic
}

interface StateProps {
    user: User
}

interface DispatchProps {
    attend: (topic: Topic, user: User) => void,
    leave: (topic: Topic, user: User) => void,
}

type Props = OwnProps & StateProps & DispatchProps

class BecomeMemberContainer extends React.Component<Props> {

    public render() {
        const { topic, user } = this.props;
        return (
            <JoinWorkshopContainer
                alreadyAttending={isAttending(topic, user)}
                anonymous={!user}
                joinText="Chcę być uczestnikiem"
                leaveText="Rezygnuję"
                attend={this.attend}
                leave={this.leave}
            />
        );
    }

    private leave = () => {
        const { topic, user, leave } = this.props;
        leave(topic, user);
    };

    private attend = () => {
        const { topic, user, attend } = this.props;
        attend(topic, user);
    };

}

const mapStateToProps = state => ({
    user: state.auth.user,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
    attend: (topic, user) => dispatch(becomeMember(topic, user)),
    leave: (topic, user) => dispatch(leaveTopic(topic, user)),
});

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(BecomeMemberContainer);
