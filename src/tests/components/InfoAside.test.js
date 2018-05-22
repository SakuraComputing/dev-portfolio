import React from 'react';
import { shallow } from 'enzyme';
import InfoAside from '../../components/InfoAside';

describe('InfoAside Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<InfoAside />);
        expect(wrapper).toMatchSnapshot();
    });
});