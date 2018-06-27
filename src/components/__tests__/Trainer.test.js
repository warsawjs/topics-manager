import React from 'react';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme/build/index';
import Trainer from '../Trainer';
import {UserModel} from '../../shared/models/UserModel';

configure({adapter: new Adapter()});

describe('<Trainer> component', () => {
    const someTrainer = UserModel.fromBackend({
        email: 'john@doe.com',
        name: 'John Doe'
    });

    let wrapper = shallow(<Trainer trainer={someTrainer}/>);

    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
