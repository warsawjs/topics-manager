
import TopicService from '../shared/services/TopicService';
import {
    MEMBER_LEAVE_REQUEST,
    MEMBER_LEAVE_REQUEST_ERROR, MEMBER_LEAVE_REQUEST_SUCCESS,
    MEMBER_SUBMIT_REQUEST,
    MEMBER_SUBMIT_REQUEST_ERROR,
    MEMBER_SUBMIT_REQUEST_SUCCESS
} from './action_types';

export const becomeMember = (topic, user) => {
    return function (dispatch) {
        dispatch(becomeMemberInit());
        return TopicService.attend(topic, user).then(() => {
            dispatch(becomeMemberSucceed());
        }).catch(error => {
            dispatch(becomeMemberError(error));
        });
    };
};

export const becomeMemberInit = () => {
    return {
        type: MEMBER_SUBMIT_REQUEST
    };
};

export const becomeMemberSucceed = () => {
    return {
        type: MEMBER_SUBMIT_REQUEST_SUCCESS,
    };
};

export const becomeMemberError = (error) => {
    return {
        type: MEMBER_SUBMIT_REQUEST_ERROR,
        payload: error
    };
};


export const leaveTopic = (topic, user) => {
    return function (dispatch) {
        dispatch(leaveTopicInit());
        return TopicService.leave(topic, user).then(() => {
            dispatch(leaveTopicSucceed());
        }).catch(error => {
            dispatch(leaveTopicError(error));
        });
    };
};

export const leaveTopicInit = () => {
    return {
        type: MEMBER_LEAVE_REQUEST
    };
};

export const leaveTopicSucceed = () => {
    return {
        type: MEMBER_LEAVE_REQUEST_SUCCESS,
    };
};

export const leaveTopicError = (error) => {
    return {
        type: MEMBER_LEAVE_REQUEST_ERROR,
        payload: error
    };
};
