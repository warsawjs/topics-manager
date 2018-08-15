import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import 'jest-styled-components';
import thunk from 'redux-thunk';
import TopicModel from '../../shared/models/TopicModel';
import { GithubUserModel } from '../../shared/models/GithubUserModel';
import BecomeMemberContainer from '../BecomeMemberContainer';
import TopicService from '../../shared/services/TopicService';
import {
    MEMBER_LEAVE_REQUEST,
    MEMBER_SUBMIT_REQUEST,
} from '../../actions/action_types';

const mockedActionType = 'TopicContainerAction';

jest.mock('../../actions/topic.actions', () => ({
    getTopics: () => ({ type: mockedActionType }),
}));

configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

describe('<BecomeMemberContainer>', () => {
    const user = GithubUserModel.fromBackend({
        email: 'john@doe.com',
    });

    const topicAttendingTo = TopicModel.fromBackendData({
        members: [user],
    });

    const topicNotAttendingTo = TopicModel.fromBackendData({
        members: [],
    });

    const initialState = {
        auth: {
            user,
        },
    };

    let wrapper;
    let store = mockStore(initialState);

    describe('when not attending to given topic yet', () => {
        let fakeService;
        beforeEach(() => {
            store.clearActions();
            fakeService = jest
                .spyOn(TopicService, 'attend')
                .mockImplementation(() => Promise.resolve());
            wrapper = shallow(
                <BecomeMemberContainer
                    store={store}
                    topic={topicNotAttendingTo}
                />
            ).dive();
        });

        afterEach(() => {
            fakeService.mockRestore();
        });

        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should have user connected correctly from redux', () => {
            expect(wrapper.instance().props.user).toBe(initialState.auth.user);
        });

        describe('when button is pressed', () => {
            beforeEach(() => {
                wrapper
                    .find('BecomeMemberContainer__ActionButton')
                    .at(0)
                    .props()
                    .onClick();
            });

            it('should dispatch MEMBER_SUBMIT_REQUEST action', () => {
                expect(store.getActions()[0].type).toBe(MEMBER_SUBMIT_REQUEST);
            });
        });
    });

    describe('when already attending to given topic', () => {
        let fakeService;
        beforeEach(() => {
            store.clearActions();
            fakeService = jest
                .spyOn(TopicService, 'leave')
                .mockImplementation(() => Promise.resolve());
            wrapper = shallow(
                <BecomeMemberContainer store={store} topic={topicAttendingTo} />
            ).dive();
        });

        afterEach(() => {
            fakeService.mockRestore();
        });

        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should have user connected correctly from redux', () => {
            expect(wrapper.instance().props.user).toBe(initialState.auth.user);
        });

        describe('when button is pressed', () => {
            beforeEach(() => {
                wrapper
                    .find('BecomeMemberContainer__ActionButton')
                    .at(0)
                    .props()
                    .onClick();
            });

            it('should dispatch MEMBER_LEAVE_REQUEST action', () => {
                expect(store.getActions()[0].type).toBe(MEMBER_LEAVE_REQUEST);
            });
        });
    });
});
