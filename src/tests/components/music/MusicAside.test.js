import React from 'react';
import { shallow } from 'enzyme';
import MusicAside from '../../../components/music/MusicAside';

describe('MusicAside Section', () => {

    const musicaside = {
      musicaside: [
          {
            id: 1,
            title: 'Test Song'
          },
          {
            id: 2,
            title: 'Test Song 2'
          }
      ]
    };

    it('should render correctly', () => {
        const wrapper = shallow(<MusicAside musicaside={musicaside}/>);
        expect(wrapper).toMatchSnapshot();
    });
});