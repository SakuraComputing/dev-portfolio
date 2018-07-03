import React from 'react';
import { shallow } from 'enzyme';
import ExperienceItem from '../../../components/experience/ExperienceItem';

describe('ExperienceItem Section', () => {
    it('should render correctly', () => {
        const experience = {
            id: 1,
            title: 'Dev',
            year: "(2016 - present)",
            company: "DHL",
            description: "Wibble"
        };
        const wrapper = shallow(<ExperienceItem experience={experience}/>);
        expect(wrapper).toMatchSnapshot();
    });
});