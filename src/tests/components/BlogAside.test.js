import React from 'react';
import { shallow } from 'enzyme';
import BlogAside from '../../components/BlogAside';

describe('BlogAside Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<BlogAside />);
        expect(wrapper).toMatchSnapshot();
    });
});