import React from 'react';
import Skills from './Skills';

class SkillsAside extends React.Component {

    render() {

        const { skillsaside, skillsummary } = this.props;

        let skillItems;

        if(skillsaside.length > 0) {
            skillItems = skillsaside.map(skill => (
                <Skills key={skill.id} skill={skill}/>
            ))
        } else {
            skillItems = <h4>No skillsaside found....... </h4>
        }

        return (
            <aside className="skills aside section">
                <div className="section-inner">
                    <h2 className="heading">Skills</h2>
                    <div className="content">
                        <p className="intro">
                            {skillsummary}
                        </p>
                        <div className="skillset">
                            {skillItems}
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}
export default SkillsAside;


