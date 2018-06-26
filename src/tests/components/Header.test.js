import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';
import json from '../../../data/profile_header';


describe('Header Component', () => {

    let wrapper;

    beforeEach(() => {
        // const header = jest.fn();
        const header = {
            name: "test",
            title: "cc",
            social: {
                linkedin: {
                    url: ""
                }
            },
        };

        wrapper = shallow(<Header header={header} />);
    });

    it('should render header correctly',() => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should show linked in account if it exists', () => {
        const header = {
            social: { linkedin: { url: "http://wibble.com" } },
        };
        wrapper = shallow(<Header header={header} />);
        expect(wrapper.find('.fa-linkedin').exists()).toBe(true);
    });
    it('should not show linked in account if it doesnt exist', () => {
        const header = {
            social: { linkedin: { url: "" } },
        };
        wrapper = shallow(<Header header={header} />);
        expect(wrapper.find('.fa-linkedin').exists()).toBe(false);
    });

});

