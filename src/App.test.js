import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper  = shallow(<App />);
  console.log(wrapper.debug());
});
