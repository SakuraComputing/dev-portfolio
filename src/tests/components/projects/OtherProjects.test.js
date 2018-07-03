import React from 'react';
import { shallow } from 'enzyme';
import OtherProjects from '../../../components/projects/OtherProjects';

describe('Other Projects Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<OtherProjects />);
        expect(wrapper).toMatchSnapshot();
    });
});