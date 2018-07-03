import React from 'react';
import EducationItem from '../../components/education/EducationItem';

class EducationAside extends React.Component {

    render() {

        const {education} = this.props;

        let educationItem;

        if (education.length > 0) {
            educationItem = education.map(item => (
                <EducationItem key={item.id} item={item}/>
            ));
        }

        return (
            <aside className="education aside section">
                <div className="section-inner">
                    <h2 className="heading">Education</h2>
                    <div className="content">
                        {educationItem}
                    </div>
                </div>
            </aside>
        )
    }
};
export default EducationAside;