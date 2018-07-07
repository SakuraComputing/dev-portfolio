import React from 'react';
import { shallow } from 'enzyme';
import LanguagesAside from '../../../components/languages/LanguagesAside';

describe('LanguagesAside Section', () => {
    it('should render correctly', () => {
        const languages = jest.fn();
        const wrapper = shallow(<LanguagesAside languages={languages}/>);
        expect(wrapper).toMatchSnapshot();
    });
});