import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Project from './projects/Project';
import OtherProjects from './projects/OtherProjects';
import Experience from './experience/Experience';
import InfoAside from '../components/InfoAside';
import SkillsAside from './skills/SkillsAside';
import EducationAside from './education/EducationAside';
import LanguagesAside from './languages/LanguagesAside';
import BlogAside from '../components/BlogAside';
import MusicAside from './music/MusicAside';
import CreditsAside from '../components/CreditsAside';
import Footer from '../components/Footer';
import profile_json from '../../data/profile';

class LandingPage  extends React.Component {

    constructor(props) {
        super(props);
         this.state = {};
    }


    componentWillMount() {
        this.setState(profile_json);
    }

    render() {
        const { header,
                about,
                infoaside,
                skillsaside,
                skillsummary,
                musicaside,
                projects,
                latestproject,
                experience,
                otherprojects,
                education,
                languages
        } = this.state;

        return (
            <div>
                <Header header={header}/>
                <div className="container sections-wrapper">
                    <div className="row">
                        <div className="primary col-md-8 col-sm-12 col-xs-12">
                            <About about={about} />
                            <Project projects={projects} latestproject={latestproject}/>
                            <OtherProjects otherprojects={otherprojects}/>
                            <Experience experience={experience}/>
                        </div>
                        <div className="secondary col-md-4 col-sm-12 col-xs-12">
                            <InfoAside infoaside={infoaside}/>
                            <SkillsAside skillsaside={skillsaside} skillsummary={skillsummary}/>
                            <EducationAside education={education}/>
                            <LanguagesAside languages={languages}/>
                            <BlogAside/>
                            <MusicAside musicaside={musicaside}/>
                            <CreditsAside/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
};
export default LandingPage;
