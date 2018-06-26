import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import LatestProject from '../components/LatestProject';
import OtherProjects from '../components/OtherProjects';
import Experience from '../components/Experience';
import Github from '../components/Github';
import InfoAside from '../components/InfoAside';
import SkillsAside from '../components/SkillsAside';
import TestimonialsAside from '../components/TestimonialsAside';
import EducationAside from '../components/EducationAside';
import LanguagesAside from '../components/LanguagesAside';
import BlogAside from '../components/BlogAside';
import MusicAside from '../components/MusicAside';
import ConferenceAside from '../components/ConferenceAside';
import CreditsAside from '../components/CreditsAside';
import Footer from '../components/Footer';
import profile_header_json from '../../data/profile_header';

class LandingPage  extends React.Component {

    constructor(props) {
        super(props);
         this.state = {};
    }


    componentWillMount() {
        this.setState(profile_header_json);
    }

    render() {
        const { header } = this.state;
        console.log(header);

        return (
            <div>
                <Header header={header}/>
                <div className="container sections-wrapper">
                    <div className="row">
                        <div className="primary col-md-8 col-sm-12 col-xs-12">
                            <About/>
                            <LatestProject/>
                            <OtherProjects/>
                            <Experience/>
                            <Github/>
                        </div>
                        <div className="secondary col-md-4 col-sm-12 col-xs-12">
                            <InfoAside/>
                            <SkillsAside/>
                            <TestimonialsAside/>
                            <EducationAside/>
                            <LanguagesAside/>
                            <BlogAside/>
                            <MusicAside/>
                            <ConferenceAside/>
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