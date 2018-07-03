import React from 'react';
import { shallow } from 'enzyme';
import EducationItem from '../../../components/education/EducationItem';

describe('EducationItem Section', () => {
    it('should render correctly', () => {
        const educationitem = jest.fn();
        const wrapper = shallow(<EducationItem educationitem={educationitem}/>);
        expect(wrapper).toMatchSnapshot();
    });
});