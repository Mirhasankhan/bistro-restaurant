import React from 'react';
import Banner from './Banner';
import Category from './Category';
import About from './About';
import PopularMenu from './PopularMenu';
import FeaturedMenu from './FeaturedMenu';
import Testimonials from './Testimonials';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <FeaturedMenu></FeaturedMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;