import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure({adapter: new Adapter() });

describe('<App />', () => {
    const wrapper = shallow(<App />);
    it('should contain sections', () => {
        expect(wrapper.find('Header').exists()).toBe(true);
        expect(wrapper.find('WorkshopForm').exists()).toBe(true);
        expect(wrapper.find('TopicsList').exists()).toBe(true);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
