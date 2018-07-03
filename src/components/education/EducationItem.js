import React from 'react';

const EducationItem = (props) => {
    return (
        <div>
            <div className="item">
                <h3 className="title"><i className="fa fa-graduation-cap"></i>{props.educationitem.qualification}
                </h3>
                <h4 className="university">{props.educationitem.institution}<span className="year">{props.educationitem.year}</span></h4>
            </div>
        </div>
    );
};

export default EducationItem;
