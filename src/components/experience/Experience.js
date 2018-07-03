import React from 'react';
import ExperienceItem from '../../components/experience/ExperienceItem';

class Experience extends React.Component{

    render() {

        const { experience } = this.props;

        let experienceItems;

        if(experience.length > 0) {
            experienceItems = experience.map(role => (
                <ExperienceItem key={role.id} role={role}/>
            ))
        }

        return(
            <section className="experience section">
                <div className="section-inner">
                    <h2 className="heading">Work Experience</h2>
                    <div className="content">
                        {experienceItems}
                    </div>
                </div>
            </section>
        )
    }
}
export default Experience;