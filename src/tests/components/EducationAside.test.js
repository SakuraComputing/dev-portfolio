import React from 'react';
import { shallow } from 'enzyme';
import EducationAside from '../../components/EducationAside';

describe('EducationAside Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<EducationAside />);
        expect(wrapper).toMatchSnapshot();
    });
});