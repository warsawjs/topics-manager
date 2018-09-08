import {
    TOPICS_GET_REQUEST_SUCCESS,
    TOPICS_GET_REQUEST,
    TOPICS_SUBMIT_REQUEST,
} from './action_types';
import {
    TOPICS_GET_REQUEST_ERROR,
    TOPICS_SUBMIT_REQUEST_SUCCESS,
} from './action_types';
import TopicService from '../shared/services/TopicService';

export const topicFetchInit = () => {
    return {
        type: TOPICS_GET_REQUEST,
    };
};

export const topicsFetched = topics => {
    return {
        type: TOPICS_GET_REQUEST_SUCCESS,
        payload: topics,
    };
};

export const topicsFetchError = error => {
    return {
        type: TOPICS_GET_REQUEST_ERROR,
        payload: error,
    };
};

export const topicSubmitted = () => ({
    type: TOPICS_SUBMIT_REQUEST_SUCCESS,
});

export const submitTopic = (topic, author) => {
    return dispatch => {
        dispatch({
            type: TOPICS_SUBMIT_REQUEST,
            payload: {
                topic,
                author,
            },
        });
        TopicService.submitTopic(topic, author);
        dispatch(topicSubmitted());
    };
};
