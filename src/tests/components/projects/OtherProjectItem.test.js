import React from 'react';
import { shallow } from 'enzyme';
import OtherProjectItem from '../../../components/projects/OtherProjectItem';

describe('Other Projects Section', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<OtherProjectItem />);
        expect(wrapper).toMatchSnapshot();
    });
});