import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import 'jest-styled-components';
import TopBar from '../TopBar';
import Button from '../Button';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../../actions/action_types';

import thunk from 'redux-thunk';
const middlewares = [thunk];

configure({ adapter: new Adapter() });
const mockStore = configureMockStore(middlewares);

describe('<TopBar>', () => {
    const initialState = {
        auth: {
            logged: false
        }
    };
    let wrapper;
    let store = mockStore(initialState);
    
    beforeEach(() => {
        wrapper = shallow(<TopBar store={store}/>).dive();
    });
    
    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    describe('given that user is logged', () => {
        let button;
        beforeEach(() => {
            store = mockStore({
                auth: {
                    logged: true
                }
            });
            wrapper = shallow(<TopBar store={store}/>).dive();
            button = wrapper.find(Button);
        });
        
        it('should have a proper text on button', () => {
            expect(button.children().text()).toBe('Wyloguj');
        });
        
        it('should dispatch logout action on click', () => {
            button.simulate('click');
            const actions = store.getActions();
            expect(actions.length).toBe(1);
            expect(actions[0].type).toBe(LOGOUT_REQUEST);
        });
        
    });
    
    describe('given that user is not logged in', () => {
        let button;
        beforeEach(() => {
            store = mockStore({
                auth: {
                    logged: false
                }
            });
            wrapper = shallow(<TopBar store={store}/>).dive();
            button = wrapper.find(Button);
        });
        
        it('should have a proper text on button', () => {
            expect(button.children().text()).toBe('Zaloguj');
        });
        
        it('should dispatch login action on click', () => {
            button.simulate('click');
            const actions = store.getActions();
            expect(actions.length).toBe(1);
            expect(actions[0].type).toBe(LOGIN_REQUEST);
        });
    });
    
});
