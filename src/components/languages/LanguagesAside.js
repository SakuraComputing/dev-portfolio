import React from 'react';
import Language from './Language';

class LanguagesAside extends React.Component {
    render() {

        const { languages } = this.props;

        let languageItem;

        if(languages.length > 0) {
            languageItem = languages.map(language => (
                <Language key={language.title} language={language}/>
                )
            )
        }


        return (
            <aside className="languages aside section">
                <div className="section-inner">
                    <h2 className="heading">Languages</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            {languageItem}
                        </ul>
                    </div>
                </div>
            </aside>
        )
    }
}
export default LanguagesAside;
