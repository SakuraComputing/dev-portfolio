import React from 'react';
import { shallow } from 'enzyme';
import SkillsAside from '../../../components/skills/SkillsAside';

describe('SkillsAside Section', () => {
    it('should render correctly', () => {
        const skillsaside =
          [
            {
                "id": 1,
                "title": "CSS",
                "level": "Expert",
                "Bar": 80
            },
            {
                "id": 2,
                "title": "Javascript",
                "level": "Expert",
                "Bar": 81
            }
          ]
        ;
        const wrapper = shallow(<SkillsAside skillsaside={skillsaside}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render no skills found if none passed in', () => {
        const skillsaside = [];
        const wrapper = shallow(<SkillsAside skillsaside={skillsaside}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
