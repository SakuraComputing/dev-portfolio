import React from 'react';

export const SkillsAside = () => (
    <aside className="skills aside section">
        <div className="section-inner">
            <h2 className="heading">Skills</h2>
            <div className="content">
                <p className="intro">
                    Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can
                    always provide a link to your Linkedin or Coderwall profile so people can get more info there.</p>

                <div className="skillset">

                    <div className="item">
                        <h3 className="level-title">Python &amp; Django<span className="level-label"
                                                                             data-toggle="tooltip" data-placement="left"
                                                                             data-animation="true"
                                                                             title="You can use the tooltip to add more info...">Expert</span>
                        </h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="96%">
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">Javascript &amp; jQuery<span className="level-label">Expert</span>
                        </h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="96%">
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">HTML5, CSS3, SASS &amp; LESS<span
                            className="level-label">Expert</span></h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="96%">
                            </div>
                        </div>

                    </div>

                    <div className="item">
                        <h3 className="level-title">Ruby on Rails<span className="level-label">Pro</span></h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="85%">
                            </div>
                        </div>

                    </div>

                    <p><a className="more-link" href="#"><i className="fa fa-external-link"></i> More on Coderwall</a>
                    </p>
                </div>
            </div>
        </div>
    </aside>

);

export default SkillsAside;