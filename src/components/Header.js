import React from 'react';

export const Header = (props) => (

    <header className="header">
        <div className="container">
            <img className="profile-image img-responsive pull-left" src="/public/images/loader.gif" alt="Ewan Bauld"/>
            <div className="profile-content pull-left">
                <h1 className="name">{props.header.name}</h1>
                <h2 className="desc">{props.header.title}</h2>
                <ul className="social list-inline">
                    {props.header.social.twitter.url ? <li><a href="#"><i className="fa fa-twitter"></i></a></li> : null}
                    {props.header.social.googleplus.url ?<li><a href="#"><i className="fa fa-google-plus"></i></a></li> : null}
                    {props.header.social.linkedin.url ? <li><a href="#"><i className="fa fa-linkedin"></i></a></li> : null}
                    {props.header.social.github.url ?<li><a href="#"><i className="fa fa-github-alt"></i></a></li> : null}
                    <li className="last-item"><a href="#"><i className="fa fa-hacker-news"></i></a></li>
                </ul>
            </div>
            <a className="btn btn-cta-primary pull-right" href="http://themes.3rdwavemedia.com/" target="_blank"><i
                className="fa fa-paper-plane"></i>Contact Me</a>
        </div>
    </header>
);

export default Header;

