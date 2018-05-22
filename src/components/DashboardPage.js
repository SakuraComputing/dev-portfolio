import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import LatestProject from '../components/LatestProject';

const DashboardPage = () =>(
    <div>
        <Header />
        <About/>
        <LatestProject/>
    </div>
);
export default DashboardPage;