import TopicService from '../shared/services/TopicService';
import {
    TRAINER_LEAVE_REQUEST,
    TRAINER_LEAVE_REQUEST_SUCCESS,
    TRAINER_LEAVE_REQUEST_ERROR,
    TRAINER_SUBMIT_REQUEST,
    TRAINER_SUBMIT_REQUEST_ERROR,
    TRAINER_SUBMIT_REQUEST_SUCCESS,
} from './action_types';

export const becomeTrainer = (topic, user) => {
    return function(dispatch) {
        dispatch(becomeTrainerInit());
        return TopicService.signUpAsTrainer(topic, user)
            .then(() => {
                dispatch(becomeTrainerSucceed());
            })
            .catch(error => {
                dispatch(becomeTrainerError(error));
            });
    };
};

export const becomeTrainerInit = () => {
    return {
        type: TRAINER_SUBMIT_REQUEST,
    };
};

export const becomeTrainerSucceed = () => {
    return {
        type: TRAINER_SUBMIT_REQUEST_SUCCESS,
    };
};

export const becomeTrainerError = error => {
    return {
        type: TRAINER_SUBMIT_REQUEST_ERROR,
        payload: error,
    };
};

export const signOffTrainer = (topic, user) => {
    return function(dispatch) {
        dispatch(signOffTrainerInit());
        return TopicService.signOffTrainer(topic, user)
            .then(() => {
                dispatch(signOffTrainerSucceed());
            })
            .catch(error => {
                dispatch(signOffTrainerError(error));
            });
    };
};

export const signOffTrainerInit = () => {
    return {
        type: TRAINER_LEAVE_REQUEST,
    };
};

export const signOffTrainerSucceed = () => {
    return {
        type: TRAINER_LEAVE_REQUEST_SUCCESS,
    };
};

export const signOffTrainerError = error => {
    return {
        type: TRAINER_LEAVE_REQUEST_ERROR,
        payload: error,
    };
};
