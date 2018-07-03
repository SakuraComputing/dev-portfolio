import React from 'react';

const Item = (props) => {
    return (
        <div>
            <div className="item">
                <h3 className="title"><i className="fa fa-graduation-cap"></i>{props.item.qualification}
                </h3>
                <h4 className="university">{props.item.institution}<span className="year">{props.item.year}</span></h4>
            </div>
        </div>
    );
};

export default Item;
