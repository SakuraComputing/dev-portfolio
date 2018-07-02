import React from 'react';
import Songs from './Songs';

class MusicAside extends React.Component {

    render() {

        const { musicaside } = this.props;

        let musicItems;

        if(musicaside.length > 0 ) {
            musicItems = musicaside.map(song => (
                <Songs key={song.id} song={song}/>
            ))
        } else {
            musicItems = <h4>No Songs Found.......</h4>
        }

        return (
            <aside className="list music aside section">
                <div className="section-inner">
                    <h2 className="heading">Favourite coding music</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            {musicItems}
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
}

export default MusicAside;
