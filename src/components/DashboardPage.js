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

const DashboardPage = () =>(
    <div>
        <Header />
        <About/>
        <LatestProject/>
        <OtherProjects/>
        <Experience/>
        <Github/>
        <InfoAside/>
        <SkillsAside/>
        <TestimonialsAside/>
        <EducationAside/>
    </div>
);
export default DashboardPage;