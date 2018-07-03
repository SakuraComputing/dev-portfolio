import React from 'react';

const ProjectItem = (props) => {
    return (
        <div className="item row">
            <a className="col-md-4 col-sm-4 col-xs-12"
               href={props.project.exampleURL}
               target="_blank">
                <img className="img-responsive project-image" src={props.project.imagePath}
                     alt="project name"/>
            </a>
            <div className="desc col-md-8 col-sm-8 col-xs-12">
                <h3 className="title"><a
                    href={props.project.exampleURL}
                    target="_blank">{props.project.title}</a></h3>
                <p>{props.project.description1}</p>
                <p><a className="more-link"
                      href={props.project.exampleURL}
                      target="_blank"><i className="fa fa-external-link"></i> Find out more</a></p>
            </div>
        </div>
    );
};

export default ProjectItem;
