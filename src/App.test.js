import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import store from './redux/store';
import { Provider } from 'react-redux';
configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Provider store={store}><App {...props} /></Provider>);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});
