import React from 'react';
import Advertis from '../Advartise/Advertis';
import Slider from '../Slider/Slider';
import HomeCard from './HomeCard/HomeCard';
import HomeDisplay from './HomeDisplay';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeCard></HomeCard>
            <HomeDisplay></HomeDisplay>
            <Advertis></Advertis>

        </div>
    );
};

export default Home;