import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import LandingPage from '../../components/LandingPage';
import profile_header_json from '../../../data/profile';


describe('Landing Page', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LandingPage />);
    });

    it('should render Expense dashboard page correctly',() => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should read the profile json file into state', () => {

        // const profileState = {
        //     name: 'test'
        // };
        // wrapper.setState(profileState);
        expect(wrapper.state()).toEqual(profile_header_json);
    });
});
