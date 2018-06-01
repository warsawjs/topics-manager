import React from 'react';
import { configure, shallow } from 'enzyme';
import { ActivityIndicator } from '../ActivityIndicator';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ActivityIndicator>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ActivityIndicator/>);
    });
    
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
