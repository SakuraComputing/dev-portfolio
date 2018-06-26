import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../components/LandingPage';

jest.mock('react-dom', ()=> ({render: jest.fn()}));

describe('App', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LandingPage />, div);
        global.document.getElementById = (id) => id ==='app';
        expect(ReactDOM.render).toHaveBeenCalledWith(<LandingPage />, div);
    });
});