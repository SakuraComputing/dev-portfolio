import React from 'react';

export const Header = (props) => (

    <header className="header">
        <div className="container">
            <img className="profile-image img-responsive pull-left" src="assets/images/sakura.png" alt="Ewan Bauld"/>
            <div className="profile-content pull-left">
                <h1 className="name">{props.header.name}</h1>
                <h2 className="desc">{props.header.title}</h2>
                <ul className="social list-inline">
                    {props.header.social.twitter.url ? <li><a href={props.header.social.twitter.url}><i className="fa fa-twitter"></i></a></li> : null}
                    {props.header.social.googleplus.url ?<li><a href={props.header.social.googleplus.url}><i className="fa fa-google-plus"></i></a></li> : null}
                    {props.header.social.linkedin.url ? <li><a href={props.header.social.linkedin.url}><i className="fa fa-linkedin"></i></a></li> : null}
                    {props.header.social.github.url ? <li><a href={props.header.social.github.url}><i className="fa fa-github-alt"></i></a></li> : null}
                    {props.header.social.hackernews.url ? <li className="last-item"><a href={props.header.social.hackernews.url}><i className="fa fa-hacker-news"></i></a></li> : null}
                </ul>
            </div>
        </div>
    </header>
);

export default Header;

