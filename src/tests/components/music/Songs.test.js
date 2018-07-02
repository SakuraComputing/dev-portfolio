import React from 'react';
import { shallow } from 'enzyme';
import Songs from '../../../components/music/Songs';

describe('Songs', () => {

    let wrapper, song;

    beforeEach(() => {
        song = jest.fn();
        wrapper = shallow(<Songs song={song}/>);

    });
    it('should render the for correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
});