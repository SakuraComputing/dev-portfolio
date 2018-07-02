import React from 'react';
import { shallow } from 'enzyme';
import LatestProject from '../../../components/projects/LatestProject';

describe('Latest Project Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<LatestProject />);
        expect(wrapper).toMatchSnapshot();
    });
});