import React from 'react';
import { shallow } from 'enzyme';
import LanguagesAside from '../../../components/languages/LanguagesAside';

describe('LanguagesAside Section', () => {
    it('should render correctly', () => {
        const  languages = [
            {
                "title": "Tuvan",
                "level": "Fluent",
                "rating": 5
            },
            {
                "title": "Japanese",
                "level": "Basic",
                "rating": 1
            }
        ];
        const wrapper = shallow(<LanguagesAside languages={languages}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should not render any languages if nothing passed in', () => {
        const  languages = [];
        const wrapper = shallow(<LanguagesAside languages={languages}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
