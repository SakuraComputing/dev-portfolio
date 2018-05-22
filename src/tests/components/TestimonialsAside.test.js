import React from 'react';
import { shallow } from 'enzyme';
import TestimonialsAside from '../../components/TestimonialsAside';

describe('TestimonialsAside Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<TestimonialsAside />);
        expect(wrapper).toMatchSnapshot();
    });
});