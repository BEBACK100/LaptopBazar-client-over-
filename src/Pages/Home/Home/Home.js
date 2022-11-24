import React from 'react';
import Advertis from '../Advartise/Advertis';
import Slider from '../Slider/Slider';
import HomeCard from './HomeCard/HomeCard';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeCard></HomeCard>
            <Advertis></Advertis>
        </div>
    );
};

export default Home;