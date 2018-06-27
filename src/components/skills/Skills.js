import React from 'react';

const Skills = (props) => (

        <div className="item">
            <h3 className="level-title">
                {props.skill.title}
                <span className="level-label"
                     data-toggle="tooltip"
                     data-placement="left"
                     data-animation="true"
                     title="You can use the tooltip to add more info...">
                    {props.skill.level}
                </span>
            </h3>
            <div className="level-bar">
                <div className="level-bar-inner" data-level={props.skill.bar}>
                </div>
            </div>
        </div>
);
export default Skills;