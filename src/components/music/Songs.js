import React from 'react';

const Songs = (props) => (

    <li>
        <i className="fa fa-headphones"></i>
        <a href="#">
            {props.song.title}
        </a>
    </li>
);
export default Songs;