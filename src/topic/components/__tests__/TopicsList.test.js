import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import TopicsList from '../TopicsList';
import Topic from '../Topic';
import TopicModel from '../../../shared/models/TopicModel';

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
    
});
