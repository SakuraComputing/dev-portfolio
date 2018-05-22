import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});