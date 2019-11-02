import React from 'react';
import { shallow, configure } from 'enzyme';
import FormInput from './form-input.component';
import TestUtil from '../../test/TestUtil';
import Adapter from 'enzyme-adapter-react-16';

const changeFn = function () { }
const defaultProps = {
  handleChange: changeFn,
  name: 'test-name',
  label: 'Test form input',
};
configure({ adapter: new Adapter() });
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<FormInput {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders the form input', () => {
  const wrapper = setup();
  const input = TestUtil.findByDataTestAttrVal(wrapper, 'form-input-input');
  expect(input.length).toBe(1);
});

test('form input has correct properties', () => {
  const wrapper = setup();
  const input = TestUtil.findByDataTestAttrVal(wrapper, 'form-input-input');
  expect(input.at(0).prop('name')).toBe(defaultProps.name);
  const label = TestUtil.findByDataTestAttrVal(wrapper, 'form-input-label');
  expect(label.at(0).text()).toBe(defaultProps.label);
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(FormInput, defaultProps);
});
