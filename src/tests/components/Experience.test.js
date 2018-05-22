import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/Experience';

describe('Experience Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Experience />);
        expect(wrapper).toMatchSnapshot();
    });
});