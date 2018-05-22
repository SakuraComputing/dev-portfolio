import React from 'react';
import { shallow } from 'enzyme';
import SkillsAside from '../../components/SkillsAside';

describe('SkillsAside Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<SkillsAside />);
        expect(wrapper).toMatchSnapshot();
    });
});