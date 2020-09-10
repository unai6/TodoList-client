import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from '../Components/Dashboard';

const setup = (props) => {
  const wrapper = shallow(<Dashboard {...props}/>)
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without crashing', () => {
  const wrapper = setup();
  const displayAppComponent = findByTestAttr(wrapper, 'app-component');
  expect(displayAppComponent.length).toBe(1);

});

test('image rendered correctly', () => {
  const wrapper = setup();
  const renderPic = findByTestAttr(wrapper, 'image-logo');
  expect(renderPic.length).toBe(1);
});

test('renders sidebar component', () => {
  const wrapper = setup();
  const renderSideBar = findByTestAttr(wrapper, 'sidebar-component');
  expect(renderSideBar.length).toBe(1);
})
