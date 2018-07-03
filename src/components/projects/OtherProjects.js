import React from 'react';

export const OtherProjects = () => (
    <section className="projects section">
        <div className="section-inner">
            <h2 className="heading">Other Projects</h2>
            <div className="content">
                <div className="item">
                    <h3 className="title"><a href="#">Project Title Cras Lacus</a></h3>
                    <p className="summary">Provide a brief description of your project.</p>
                    <p><a className="more-link"
                          href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
                          target="_blank"><i className="fa fa-external-link"></i> Find out more</a></p>
                </div>
                <div className="item">
                    <h3 className="title"><a href="#">Project Title Cras eget lacus</a> <span
                        className="label label-theme">Open Source</span></h3>
                    <p className="summary">Provide a brief description of your project.</p>
                    <p><a className="more-link"
                          href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
                          target="_blank"><i className="fa fa-external-link"></i> View on GitHub</a></p>
                </div>
                <div className="item">
                    <h3 className="title"><a href="#">Project Title Maecenas Ornare</a> <span
                        className="label label-theme">Open Source</span></h3>
                    <p className="summary">Provide a brief description of your project.</p>
                    <p><a className="more-link"
                          href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
                          target="_blank"><i className="fa fa-external-link"></i> View on GitHub</a></p>
                </div>
                <a className="btn btn-cta-secondary" href="#">More on CoderWall <i className="fa fa-chevron-right"></i></a>

            </div>
        </div>
    </section>
);
export default OtherProjects;