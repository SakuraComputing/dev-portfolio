import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../../components/experience/Experience';

describe('Experience Section', () => {
    it('should render correctly', () => {
        const experience = [
            {
                "id": 3,
                "title": "Lead Developer",
                "company": "Yodel/DHL",
                "year": "(2011 - 2016)",
                "description": "Lead Uniface developer responsible for the core parcel delivery system"
            },
            {
                "id": 2,
                "title": "Web Developer",
                "company": "Yodel",
                "year": "(2016 - Jan 2018)",
                "description": "Web developer Ruby on Rails originally then React JS and some Java API experience. Exposed to TDD, Docker and Kafka"
            },
            {
                "id": 1,
                "title": "Full Stack Developer",
                "company": "Three Media Associates",
                "year": "(2018 - present)",
                "description": "Full stack developer exposed to Angular, C# and NodeJS"
            }
        ];
        const wrapper = shallow(<Experience experience={experience}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should not render any experience if nothing paseed in', () => {
        const experience = [];
        const wrapper = shallow(<Experience experience={experience}/>);
        expect(wrapper).toMatchSnapshot();
    });
});