import React from 'react';
import { shallow } from 'enzyme';
import CreditsAside from '../../components/CreditsAside';

describe('CreditsAside Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<CreditsAside />);
        expect(wrapper).toMatchSnapshot();
    });
});