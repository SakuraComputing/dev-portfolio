import React from 'react';
import { shallow } from 'enzyme';
import Github from '../../components/Github';

describe('Github Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Github />);
        expect(wrapper).toMatchSnapshot();
    });
});