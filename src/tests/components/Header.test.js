import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';
import json from '../../../data/profile_header';


describe('Header Component with social connections', () => {

    let wrapper;

    beforeEach(() => {
        const header = {
            name: "test",
            title: "cc",
            social: { linkedin: { url: "http://wibble.com" },
                twitter: { url: "http://wibble.com" },
                googleplus: { url: "http://wibble.com" },
                github: { url: "http://wibble.com" },
            },
        };
        wrapper = shallow(<Header header={header} />);
    });

    it('should show linked in account if it exists', () => {
        expect(wrapper.find('.fa-linkedin').exists()).toBe(true);
    });
    it('should show twitter account if it exists', () => {
        expect(wrapper.find('.fa-twitter').exists()).toBe(true);
    });
    it('should show google plus account if it exists', () => {
        expect(wrapper.find('.fa-google-plus').exists()).toBe(true);
    });
    it('should show github account if it exists', () => {
        expect(wrapper.find('.fa-github-alt').exists()).toBe(true);
    });

});

describe('No social connections', () => {

    let wrapper;

    beforeEach(() => {
        const header = {
            name: "test",
            title: "cc",
            social: { linkedin: { url: "" },
                twitter: { url: "" },
                googleplus: { url: "" },
                github: { url: "" },
            },
        };
        wrapper = shallow(<Header header={header} />);
    });


    it('should not show linked in account if it doesnt exist', () => {
        expect(wrapper.find('.fa-linkedin').exists()).toBe(false);
    });
    it('should not show twitter account if it doesnt exist', () => {
        expect(wrapper.find('.fa-twitter').exists()).toBe(false);
    });
    it('should not show googlplus account if it doesnt exist', () => {
        expect(wrapper.find('.fa-google-plus').exists()).toBe(false);
    });
    it('should not show github account if it doesnt exist', () => {
        expect(wrapper.find('.fa-github-alt').exists()).toBe(false);
    });

});

