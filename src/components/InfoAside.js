import React from 'react';

export const InfoAside = () => (
    <aside className="info aside section">
        <div className="section-inner">
            <h2 className="heading sr-only">Basic Information</h2>
            <div className="content">
                <ul className="list-unstyled">
                    <li><i className="fa fa-map-marker"></i><span className="sr-only">Location:</span>San Francisco, US
                    </li>
                    <li><i className="fa fa-envelope-o"></i><span className="sr-only">Email:</span><a
                        href="#">jameslee@website.com</a></li>
                    <li><i className="fa fa-link"></i><span className="sr-only">Website:</span><a
                        href="#">http://www.website.com</a></li>
                </ul>
            </div>
        </div>
    </aside>
);

export default InfoAside;