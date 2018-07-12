import React from 'react';
import { shallow } from 'enzyme';
import Book from '../../../components/books/Book';

describe('Book Section', () => {
    it('should render correctly', () => {
        const book = [
            {
                "id": 0,
                "title": "Survive JS - Webpack and React",
                "description": "A guide to programming in React and Webpack",
                "author": "Juho Vepsäläinen",
                "link": "http://leanpub.com/survivejs_webpack_react"
            }
        ];
        const wrapper = shallow(<Book book={book}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
