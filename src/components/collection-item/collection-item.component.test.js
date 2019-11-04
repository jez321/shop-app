import React from 'react';
import { shallow, configure } from 'enzyme';
import TestUtil from '../../test/TestUtil';
import Adapter from 'enzyme-adapter-react-16';
import { CollectionItem } from './collection-item.component';

const defaultProps = {
  item: {
    imageUrl: 'https://test.com/test.jpg',
    name: 'test-name',
    price: 68
  }
};
configure({ adapter: new Adapter() });
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<CollectionItem {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders the collection item', () => {
  const wrapper = setup();
  const input = TestUtil.findByDataTestAttrVal(wrapper, 'collection-item');
  expect(input.length).toBe(1);
});

test('collection item displays correct properties', () => {
  const wrapper = setup();
  const name = TestUtil.findByDataTestAttrVal(wrapper, 'collection-item-name');
  expect(name.at(0).text()).toBe(defaultProps.item.name);
  const price = TestUtil.findByDataTestAttrVal(wrapper, 'collection-item-price');
  expect(parseInt(price.at(0).text(), 10)).toBe(defaultProps.item.price);
});

test('does not throw warning with expected props', () => {
  TestUtil.checkProps(CollectionItem, defaultProps);
});
