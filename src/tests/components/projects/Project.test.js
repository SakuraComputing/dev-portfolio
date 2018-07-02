import React from 'react';
import { shallow } from 'enzyme';
import Project from '../../../components/projects/Project';

describe('Latest Project Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Project />);
        expect(wrapper).toMatchSnapshot();
    });
});