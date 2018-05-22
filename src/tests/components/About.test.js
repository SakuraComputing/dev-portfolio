import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';

describe('About Section', () => {
   it('should render correctly', () => {
       const wrapper = shallow(<About />);
       expect(wrapper).toMatchSnapshot();
   });
});