import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../../components/skills/Skills';

describe('Skills', () => {

    let wrapper, skill;

    beforeEach(() => {
        skill = jest.fn();
        wrapper = shallow(<Skills skill={skill}/>);

    });
   it('should render the for correctly', () => {
       expect(wrapper).toMatchSnapshot()
    })
});