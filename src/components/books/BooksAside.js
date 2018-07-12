import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from '../../components/books/Book';

class BooksAside extends Component {
    render() {

        const { books } = this.props;

        let singleBook;

        if(books.length > 0) {
            singleBook = books.map(book => (
                <Book book={book}/>
            ));
        }

        return (
            <aside className="books aside section">
                <div className="section-inner">
                    <h2 className="heading">Latest Reading</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            {singleBook}
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
}

BooksAside.propTypes = {
    Books: PropTypes.array
};

export default BooksAside;
