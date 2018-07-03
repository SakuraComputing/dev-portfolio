import React from 'react';
import { shallow } from 'enzyme';
import EducationAside from '../../../components/education/EducationAside';

describe('EducationAside Section', () => {
    it('should render correctly', () => {
        const education = jest.fn();
        const wrapper = shallow(<EducationAside education={education}/>);
        expect(wrapper).toMatchSnapshot();
    });
});