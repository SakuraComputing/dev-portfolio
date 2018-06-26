import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';

describe('About Section', () => {
   it('should render correctly', () => {
       const about = {
           text: "Test Text"
       };
       const wrapper = shallow(<About about={about} />);
       expect(wrapper).toMatchSnapshot();
   });
});