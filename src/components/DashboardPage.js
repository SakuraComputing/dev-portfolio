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

const DashboardPage = () =>(
    <body>
        <Header />
        <div className="container sections-wrapper">
            <div className="row">
                <div className="primary col-md-8 col-sm-12 col-xs-12">
                    <About/>
                    <LatestProject/>
                    <OtherProjects/>
                    <Experience/>
                    <Github/>
                    <InfoAside/>
                    <SkillsAside/>
                    <TestimonialsAside/>
                    <EducationAside/>
                    <LanguagesAside/>
                    <BlogAside/>
                    <MusicAside/>
                    <ConferenceAside/>
                    <CreditsAside/>
                    <Footer/>
                </div>
            </div>
        </div>
    </body>
);
export default DashboardPage;