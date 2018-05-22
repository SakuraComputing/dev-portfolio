import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import LatestProject from '../components/LatestProject';
import OtherProjects from '../components/OtherProjects';

const DashboardPage = () =>(
    <div>
        <Header />
        <About/>
        <LatestProject/>
        <OtherProjects/>
    </div>
);
export default DashboardPage;