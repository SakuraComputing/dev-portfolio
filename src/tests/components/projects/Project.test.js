import React from 'react';
import { shallow } from 'enzyme';
import Project from '../../../components/projects/Project';

describe('Latest Project Section', () => {
    it('should render correctly', () => {
        const projects = jest.fn();
        const wrapper = shallow(<Project projects={projects}/>);
        expect(wrapper).toMatchSnapshot();
    });
});