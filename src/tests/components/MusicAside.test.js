import React from 'react';
import { shallow } from 'enzyme';
import MusicAside from '../../components/MusicAside';

describe('MusicAside Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<MusicAside />);
        expect(wrapper).toMatchSnapshot();
    });
});