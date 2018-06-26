import React from 'react';


export const About = (props) => (
    <section className="about section">
        <div className="section-inner">
            <h2 className="heading">About Me</h2>
            <div className="content">
                <p>{props.about.text}</p>
            </div>
        </div>
    </section>
);

export default About;
