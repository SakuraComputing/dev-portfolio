import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import LatestProject from '../components/LatestProject';
import OtherProjects from '../components/OtherProjects';
import Experience from '../components/Experience';

const DashboardPage = () =>(
    <div>
        <Header />
        <About/>
        <LatestProject/>
        <OtherProjects/>
        <Experience/>
    </div>
);
export default DashboardPage;