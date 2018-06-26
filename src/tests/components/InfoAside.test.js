import React from 'react';
import { shallow } from 'enzyme';
import InfoAside from '../../components/InfoAside';

describe('InfoAside Section', () => {
    it('should render correctly', () => {
        const infoaside = {
          location: "Manc",
          email: "a@e.gmail.com",
          website: "www.test.com"
        };
        const wrapper = shallow(<InfoAside infoaside={infoaside} />);
        expect(wrapper).toMatchSnapshot();
    });
});