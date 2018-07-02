import React from 'react';
import { shallow } from 'enzyme';
import ProjectItem from '../../../components/projects/ProjectItem';

describe('Project Item', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProjectItem />);
    });

    it('should render correctly', () => {
        expect(wrapper ).toMatchSnapshot();
    });
});