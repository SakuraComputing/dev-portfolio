import React from 'react';

export const MusicAside = () => (
    <aside className="list music aside section">
        <div className="section-inner">
            <h2 className="heading">Favourite coding music</h2>
            <div className="content">
                <ul className="list-unstyled">
                    <li><i className="fa fa-headphones"></i> <a href="#">Joe Hisashi Kikujiro's Last Summer</a></li>
                    <li><i className="fa fa-headphones"></i> <a href="#">PJ Harvey Is this Love?</a></li>
                    <li><i className="fa fa-headphones"></i> <a href="#">JJ Cale Fate of a Fool</a></li>
                    <li><i className="fa fa-headphones"></i> <a href="#">Tone Loc Funky Cold Medina</a></li>
                </ul>
            </div>
        </div>
    </aside>
);

export default MusicAside;