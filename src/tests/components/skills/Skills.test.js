import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../../components/skills/Skills';

describe('Skills', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Skills />);

    });
   it('should render the for correctly', () => {
       expect(wrapper).toMatchSnapshot()
    })
});