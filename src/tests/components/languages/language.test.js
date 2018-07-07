import React from 'react';
import { shallow } from 'enzyme';
import Language from '../../../components/languages/Language';

describe('Language Section', () => {
    it('should render correctly', () => {
        const language = jest.fn();
        const wrapper = shallow(<Language language={language}/>);
        expect(wrapper).toMatchSnapshot();
    });
});