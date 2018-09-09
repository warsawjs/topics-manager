import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import TopicsList from '../TopicsList';
import Topic from '../Topic';
import Topic from '../../../shared/models/topic';
import ActivityIndicator from '../../../shared/components/ActivityIndicator';

configure({ adapter: new Adapter() });

describe('<TopicsList>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TopicsList/>);
    });

    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have no topics by default', () => {
        expect(wrapper.find(Topic).length).toEqual(0);
    });

    it('should not show pending state by default', () => {
        expect(wrapper.find(ActivityIndicator).length).toEqual(0);
    });

    describe('when topics are provided', () => {
        const topics = [
            TopicModel.fromBackendData({}),
            TopicModel.fromBackendData({})
        ];
        beforeEach(() => {
            wrapper = shallow(<TopicsList topics={topics}/>);
        });

        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should have exactly so much elements as passed to <TopicsList>', () => {
            expect(wrapper.find(Topic).length).toBe(topics.length);
        });
    });

    describe('when topics are loading', () => {
        beforeEach(() => {
            wrapper = shallow(<TopicsList pending={true}/>);
        });

        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

});
