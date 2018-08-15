import React from 'react';
import App from '../App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import TopicContainer from '../topic/TopicContainer';
import Header from '../components/Header';
import WorkshopContainer from '../submit/WorkshopContainer';

configure({adapter: new Adapter()});

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
