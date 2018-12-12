import React from 'react';
import { shallow } from 'enzyme';
import ItemImage from './ItemImage';

describe('ItemImage', () => {
  describe('when passed prop imageUrl', () => {
    it('should render properly', () => {
      const wrapper = shallow(<ItemImage imageUrl="http://ok.com/whatever" />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
