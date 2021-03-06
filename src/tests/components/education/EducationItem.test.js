import React from 'react';
import { shallow } from 'enzyme';
import EducationItem from '../../../components/education/EducationItem';

describe('EducationItem Section', () => {
    it('should render correctly', () => {
        const item = jest.fn();
        const wrapper = shallow(<EducationItem item={item}/>);
        expect(wrapper).toMatchSnapshot();
    });
});