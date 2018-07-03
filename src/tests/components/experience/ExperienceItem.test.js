import React from 'react';
import { shallow } from 'enzyme';
import ExperienceItem from '../../../components/experience/ExperienceItem';

describe('ExperienceItem Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<ExperienceItem />);
        expect(wrapper).toMatchSnapshot();
    });
});