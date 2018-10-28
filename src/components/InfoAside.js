import React from 'react';

export const InfoAside = (props) => (
    <aside className="info aside section">
        <div className="section-inner">
            <h2 className="heading sr-only">Basic Information</h2>
            <div className="content">
                <ul className="list-unstyled">
                    <li><i className="fa fa-map-marker"></i><span className="sr-only">Location:</span>{props.infoaside.location}
                    </li>
                    <li><i className="fa fa-envelope-o"></i><span className="sr-only">Email:</span><a
                        href="#">{props.infoaside.email}</a></li>
                    {/* <li><i className="fa fa-link"></i><span className="sr-only">Website:</span><a
                        href="#">{props.infoaside.website}</a></li> */}
                </ul>
            </div>
        </div>
    </aside>
);

export default InfoAside;