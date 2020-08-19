import React from 'react';
import Slider from './Slider';
import UpcomingEvent from './UpcomingEvent';
import AboutArea from './AboutArea';
import ResponsibilitesArea from './ResponsibilitesArea';
import FunFact from './FunFact';
import JobOpportunities from './JobOpportunities';
import Gallery from './Gallery';
import Scholarship from './Scholarship';
import BlogArea from './BlogArea';

const HomePage = () => {
    return (
        <div>
            <Slider />
            <UpcomingEvent />
            <AboutArea />
            <ResponsibilitesArea />
            <FunFact />
            <JobOpportunities />
            <Gallery />
            <Scholarship />
            <BlogArea />
        </div>
    );
};

export default HomePage;