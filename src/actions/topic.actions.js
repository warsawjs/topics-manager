import { TOPICS_GET_REQUEST_SUCCESS, TOPICS_GET_REQUEST } from '../actions/action_types';
import { TOPICS_GET_REQUEST_ERROR } from './action_types';
import TopicService from '../shared/services/TopicService';

export const getTopics = () => {
    return function (dispatch) {
        dispatch(topicFetchInit());
        return TopicService.getSubmittedTopics().then(topics => {
            dispatch(topicsFetched(topics));
        }).catch(error => {
            dispatch(topicsFetchError(error));
        });
    };
};

export const topicFetchInit = () => {
    return {
        type: TOPICS_GET_REQUEST
    };
};

export const topicsFetched = (topics) => {
    return {
        type: TOPICS_GET_REQUEST_SUCCESS,
        payload: topics
    };
};

export const topicsFetchError = (error) => {
    return {
        type: TOPICS_GET_REQUEST_ERROR,
        payload: error
    };
};
