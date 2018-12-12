import React from 'react';
import { shallow } from 'enzyme';
import { items } from '../testUtils';
import ItemList from './ItemList';

describe('ItemList', () => {
  describe('when passed no items', () => {
    it('renders empty list', () => {
      const wrapper = shallow(<ItemList />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when passed items', () => {
    it('renders list', () => {
      const wrapper = shallow(<ItemList items={items} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
