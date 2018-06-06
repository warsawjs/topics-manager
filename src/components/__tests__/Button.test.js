import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Button from '../Button';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme/build/index';

configure({ adapter: new Adapter() });

describe('<Button> component', () => {
    let wrapper = shallow(<Button type='primary'/>);

    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have correct props', () => {
        expect(wrapper.props().type).toBe('primary');
    });
});
