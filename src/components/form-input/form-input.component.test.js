import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './form-input.component';
import TestUtil from '../../test/TestUtil';

const changeFn = function(){}
const defaultProps = {
    handleChange: changeFn,
    name: 'test-name',
    label: 'Test form input',
};

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

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(FormInput, defaultProps);
});
