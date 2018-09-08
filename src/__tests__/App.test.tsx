import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import React from 'react';
import App from '../App';
import Header from '../components/Header';
import WorkshopContainer from '../submit/WorkshopContainer';
import TopicContainer from '../topic/TopicContainer';

configure({ adapter: new Adapter() });

describe('Should render <App />', () => {
    const wrapper = shallow(<App/>);
    it('should contain sections', () => {
        expect(wrapper.find(Header).exists()).toBe(true);
        expect(wrapper.find(WorkshopContainer).exists()).toBe(true);
        expect(wrapper.find(TopicContainer).exists()).toBe(true);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
