import React from 'react';

export const CreditsAside = () => (

    <aside className="credits aside section">
        <div className="section-inner">
            <h2 className="heading">Credits</h2>
            <div className="content">
                <ul className="list-unstyled">
                    <li><a href="http://getbootstrap.com/" target="_blank"><i className="fa fa-external-link"></i> Bootstrap</a>
                    </li>
                    <li><a href="http://fortawesome.github.io/Font-Awesome/" target="_blank"><i
                        className="fa fa-external-link"></i> FontAwesome</a></li>
                    <li><a href="http://jquery.com/" target="_blank"><i className="fa fa-external-link"></i> jQuery</a></li>
                    <li><a href="https://github.com/IonicaBizau/github-calendar" target="_blank"><i
                        className="fa fa-external-link"></i> GitHub Calendar Plugin</a></li>

                    <li><a href="http://caseyscarborough.com/projects/github-activity/" target="_blank"><i
                        className="fa fa-external-link"></i> GitHub Activity Stream</a></li>

                    <li><a href="https://github.com/sdepold/jquery-rss" target="_blank"><i
                        className="fa fa-external-link"></i> jQuery RSS</a></li>

                </ul>

                <hr/>

                {/*<p>This responsive portfolio template is handcrafted by UX designer <a*/}
                    {/*href="https://www.linkedin.com/in/xiaoying" target="_blank">Xiaoying Riley</a> at <a*/}
                    {/*href="http://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a> for developers and*/}
                    {/*is <strong>FREE</strong> under the <a className="dotted-link"*/}
                                                          {/*href="http://creativecommons.org/licenses/by/3.0/"*/}
                                                          {/*target="_blank">Creative Commons Attribution 3.0 License</a></p>*/}
                {/*<p>We will improve or add new features to this template based on users' feedback so follow us on twitter to*/}
                    {/*get notified when a new version is out!</p>*/}
                {/*<a className="btn btn-cta-secondary btn-follow" href="https://twitter.com/3rdwave_themes" target="_blank"><i*/}
                    {/*className="fa fa-twitter"></i> Follow us</a>*/}
                {/*<a className="btn btn-cta-primary btn-download"*/}
                   {/*href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/"*/}
                   {/*target="_blank"><i className="fa fa-download"></i> I want to download</a>*/}
            </div>

        </div>

    </aside>

);

export default CreditsAside;


