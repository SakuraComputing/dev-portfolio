import React from 'react';
import { shallow } from 'enzyme';
import ConferenceAside from '../../components/ConferenceAside';

describe('ConferenceAside Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<ConferenceAside />);
        expect(wrapper).toMatchSnapshot();
    });
});