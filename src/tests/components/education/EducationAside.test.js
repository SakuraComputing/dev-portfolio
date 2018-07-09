import React from 'react';
import { shallow } from 'enzyme';
import EducationAside from '../../../components/education/EducationAside';

describe('EducationAside Section', () => {
    it('should render correctly', () => {

        const education = [
            {
                "id": 1,
                "institution": "Leeds University",
                "qualifiation": "BSc Degree",
                "year": "(1989-1991)"
            },
            {
                "id": 2,
                "institution": "South Trafford College",
                "qualifiation": "A Levels (BBC)",
                "year": "(1988-1989)"
            }
        ]
        // const education = jest.fn();
        const wrapper = shallow(<EducationAside education={education}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should not render any education if nothing paseed in', () => {
        const education = [];
        const wrapper = shallow(<EducationAside education={education}/>);
        expect(wrapper).toMatchSnapshot();
    });

});
