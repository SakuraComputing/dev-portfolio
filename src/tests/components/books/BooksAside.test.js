import React from 'react';
import { shallow } from 'enzyme';
import BooksAside from '../../../components/books/BooksAside';

describe('Latest Book Section', () => {
    it('should render correctly', () => {
        const books = jest.fn();
        const wrapper = shallow(<BooksAside books={books} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render nothing if no books are passed in', ()=> {
        const books = [];
        const wrapper = shallow(<BooksAside books={books} />);
        expect(wrapper).toMatchSnapshot();
    });
});
