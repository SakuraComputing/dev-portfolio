import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../../components/experience/Experience';

describe('Experience Section', () => {
    it('should render correctly', () => {
        const experience = jest.fn();
        const wrapper = shallow(<Experience experience={experience}/>);
        expect(wrapper).toMatchSnapshot();
    });
});