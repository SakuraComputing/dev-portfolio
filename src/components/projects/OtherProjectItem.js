import React from 'react';

const OtherProjectItem = (props) => {
    return (
        <div>
            <div className="item">
                <h3 className="title"><a href="#">{props.otherproject.title}</a> <span
                    className="label label-theme">Open Source</span></h3>
                <p className="summary">{props.otherproject.description}</p>
                <p><a className="more-link"
                      href={props.otherproject.github}
                      target="_blank"><i className="fa fa-external-link"></i> View on GitHub</a></p>
            </div>
        </div>
    );
};

export default OtherProjectItem;
