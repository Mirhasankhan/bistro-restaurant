import React from 'react';
import Banner from './Banner';
import Category from './Category';
import About from './About';
import PopularMenu from './PopularMenu';
import FeaturedMenu from './FeaturedMenu';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
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