import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import 'jest-styled-components';
import TopBar from '../components/TopBar';

configure({adapter: new Adapter() });

const mockStore = configureMockStore();

describe('<TopBar> should render', () => {
    const state = {
        loggedUser: true
    }
    const store = mockStore(state);
    const wrapper = shallow(<TopBar store={store}/>).dive();
    it('should contain certain texts', () => {
        const styledComponent = wrapper.find('Text');
        expect(styledComponent.children().text()).toBe('Zaloguj się przez GitHub');
    })

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
});