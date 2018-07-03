import React from 'react';
import { shallow } from 'enzyme';
import ProjectItem from '../../../components/projects/ProjectItem';

describe('Project Item', () => {

    let wrapper, project;

    beforeEach(() => {
        project = jest.fn();
        wrapper = shallow(<ProjectItem project={project}/>);
    });

    it('should render correctly', () => {
        expect(wrapper ).toMatchSnapshot();
    });
});