import React from 'react';
import { shallow } from 'enzyme';
import OtherProjects from '../../../components/projects/OtherProjects';

describe('Other Projects Section', () => {
    it('should render correctly', () => {
        const otherprojects = jest.fn();
        const wrapper = shallow(<OtherProjects otherprojects={otherprojects}/>);
        expect(wrapper).toMatchSnapshot();
    });
});