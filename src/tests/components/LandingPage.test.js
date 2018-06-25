import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import LandingPage from '../../components/LandingPage';

test('should render Expense dashboard page correctly',() => {
    const wrapper = shallow(<LandingPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
