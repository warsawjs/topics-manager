import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopicModel from '../shared/models/TopicModel';
import { becomeMember, leaveTopic } from '../actions/member.actions';
import { UserModel } from '../shared/models/UserModel';
import styled from 'styled-components';

class BecomeMemberContainer extends React.Component {
    render() {
        const { topic, user, attend, leave } = this.props;
        const alreadyAttending = topic.amIAttending(user);
        return (
            <div>
                {alreadyAttending && (
                    <LeaveButton
                        onClick={() => {
                            leave(topic, user);
                        }}
                    >
                        <MemberButtonSpanText>Rezygnuję</MemberButtonSpanText>
                    </LeaveButton>
                )}
                {!alreadyAttending && (
                    <AttendButton
                        onClick={() => {
                            attend(topic, user);
                        }}
                    >
                        <MemberButtonSpanText>
                            Chcę być uczestnikiem
                        </MemberButtonSpanText>
                    </AttendButton>
                )}
            </div>
        );
    }
}

//TODO should be moved to standalone file as shall be reused for Trainers?
export const ActionButton = styled.button`
    width: 201px;
    height: 40px;
`;

export const AttendButton = ActionButton.extend`
    background-color: #e6cf42;
`;

const LeaveButton = ActionButton.extend`
    background-color: #e6cf42;
`;

const ActionButtonSpanText = styled.span`
    width: 134px;
    height: 16px;
    font-family: Lato;
    font-size: 14px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-lign: left;
`;

const MemberButtonSpanText = ActionButtonSpanText.extend`
    color: #464646;
`;

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

/**
 * TODO test BecomeMember
 * TODO check errors in console..
 *
 * */
