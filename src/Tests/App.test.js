import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

const setup = (props) => {
  const wrapper = shallow(<App {...props}/>)
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without crashing', () => {
  const wrapper = setup();
  const displayAppComponent = findByTestAttr(wrapper, 'dashboard-component');
  expect(displayAppComponent.length).toBe(1);

});