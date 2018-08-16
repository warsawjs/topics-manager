import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import 'jest-styled-components';
import TopicContainer from '../TopicContainer';
import thunk from 'redux-thunk';
import TopicModel from '../../shared/models/TopicModel';
import TopicsList from '../components/TopicsList';

const mockedActionType = 'TopicContainerAction';

jest.mock('../../actions/topic.actions', () => ({
    getTopics: () => ({ type: mockedActionType }),
}));

configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

describe('<TopicContainer>', () => {
    const initialState = {
        auth: {
            loggedUser: false,
        },
        topic: {
            pending: true,
            error: 'test error message',
            topics: [TopicModel.fromBackendData({})],
        },
    };
    let wrapper;
    let store = mockStore(initialState);

    beforeEach(() => {
        store.clearActions();
        /**
         * help would be appreciated. we have to (?) dive, otherwise we will not have the real actions binded to
         * Component.
         * 1) Passing it as props is a fake test (i.e we don't know if the real one is called
         * 2) while using a dive, we have actions called immediately which may not be what we want
         *
         * I picked 2) as using 1) would only tell us that prop is called but we would lose the assurance that
         * Container is correctly 'connected' (i.e. has correctly mapped dispatchToProps
         *
         */
        wrapper = shallow(<TopicContainer store={store} />).dive();
    });

    it('should match snapshot with error', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have topics array connected correctly from redux', () => {
        expect(wrapper.instance().props.topics).toBe(initialState.topic.topics);
    });

    it('should have pending state connected correctly from redux', () => {
        expect(wrapper.instance().props.pending).toBe(
            initialState.topic.pending
        );
    });

    it('should have error state connected correctly from redux', () => {
        expect(wrapper.instance().props.error).toBe(initialState.topic.error);
    });

    describe('when there are no errors', () => {
        const initialState = {
            auth: {
                loggedUser: false,
            },
            topic: {
                pending: true,
                error: null,
                topics: [
                    TopicModel.fromBackendData({}),
                    TopicModel.fromBackendData({}),
                ],
            },
        };
        let wrapper;
        let store = mockStore(initialState);

        beforeEach(() => {
            wrapper = shallow(<TopicContainer store={store} />).dive();
        });

        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should properly pass topics to rendered <TopicsList>', () => {
            //is a bit too complicated and should be splitted into context-based `describes` but for this one test it would be too much
            expect(
                wrapper
                    .find(TopicsList)
                    .at(0)
                    .props().topics.length
            ).toBe(2);
        });
    });
});
