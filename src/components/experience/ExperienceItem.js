import React from 'react';

const ExperienceItem = (props) => {
    return (
        <div>
            <div className="item">
                <h3 className="title">{props.role.title} - <span className="place"><a
                    href="#">{props.role.company}</a></span> <span className="year">{props.role.year}</span></h3>
                <p>{props.role.description}</p>
            </div>
        </div>
    );
};

export default ExperienceItem;
