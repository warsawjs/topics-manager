import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import TrainersList from '../TrainersList';
import Trainer from '../../../components/Trainer';
import {UserModel} from '../../../shared/models/UserModel';

configure({adapter: new Adapter()});

describe('<TrainersList>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TrainersList/>);
    });

    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have no trainers by default', () => {
        expect(wrapper.find(Trainer).length).toEqual(0);
    });

    describe('when trainers are provided', () => {
        const trainers = [
            UserModel.fromBackend({}),
            UserModel.fromBackend({})
        ];
        beforeEach(() => {
            wrapper = shallow(<TrainersList trainers={trainers}/>);
        });

        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should have exactly so much elements as passed to <TrainersList>', () => {
            expect(wrapper.find(Trainer).length).toBe(trainers.length);
        });
    });

});
