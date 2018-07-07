import React from 'react';
import { shallow } from 'enzyme';
import LanguagesAside from '../../../components/languages/LanguagesAside';

describe('LanguagesAside Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<LanguagesAside />);
        expect(wrapper).toMatchSnapshot();
    });
});