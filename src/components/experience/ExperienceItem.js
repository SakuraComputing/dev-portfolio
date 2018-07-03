import React from 'react';

const ExperienceItem = (props) => {
    return (
        <div>
            <div className="item">
                <h3 className="title">{props.experience.title} - <span className="place"><a
                    href="#">{props.experience.company}</a></span> <span className="year">{props.experience.year}</span></h3>
                <p>{props.experience.description}</p>
            </div>
        </div>
    );
};

export default ExperienceItem;
