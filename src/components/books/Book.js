import React from 'react';

const Book = (props) => {
    return (
        <div>
            <div className="item">
                <h4 className="title"><a href="#">{props.book.title}</a> <span
                    className="label label-theme">{props.book.author}</span></h4>
                <p className="summary">{props.book.description}</p>
                <p className="summary">{props.book.author}</p>
                <p><a className="more-link"
                      href={props.book.link}
                      target="_blank"><i className="fa fa-external-link"></i> Purchase here</a></p>
            </div>

        </div>
    );
};

export default Book;
