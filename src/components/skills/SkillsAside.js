import React from 'react';
import Skills from './Skills';

class SkillsAside extends React.Component {

    render() {

        const { skillsaside } = this.props;

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
                                Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can
                                always provide a link to your Linkedin or Coderwall profile so people can get more info there.</p>
                            <div className="skillset">
                                {skillItems}
                            </div>
                            <p><a className="more-link" href="#"><i className="fa fa-external-link"></i> More on Coderwall</a>
                            </p>
                        </div>
                    </div>
                </aside>

        );
    }
}
export default SkillsAside;


