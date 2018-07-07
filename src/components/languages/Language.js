import React from 'react';

const Language = (props) => {
    return (
        <div>
            <li className="item">
                <span className="title"><strong>{props.language.title}: </strong></span>
                <span className="level">{props.language.level} <br className="visible-xs"/>
                    {
                        '★'.repeat(props.language.rating)
                    }
                </span>
            </li>

        </div>
    );
};

export default Language;
