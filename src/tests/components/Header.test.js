import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';


describe('Header Component', () => {

    let wrapper;

    beforeEach(() => {
        const header = jest.fn();
        wrapper = shallow(<Header header={header} />);
    });

    it('should render header correctly',() => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});

