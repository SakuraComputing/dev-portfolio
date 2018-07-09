import React from 'react';
import { shallow } from 'enzyme';
import MusicAside from '../../../components/music/MusicAside';

describe('MusicAside Section', () => {

    it('should render correctly', () => {
        const musicaside =
          [
              {
                id: 1,
                title: 'Test Song'
              },
              {
                id: 2,
                title: 'Test Song 2'
              }
          ];
        const wrapper = shallow(<MusicAside musicaside={musicaside}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should display no records found if none passed in', () => {
        const musicaside = [];
        const wrapper = shallow(<MusicAside musicaside={musicaside}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
