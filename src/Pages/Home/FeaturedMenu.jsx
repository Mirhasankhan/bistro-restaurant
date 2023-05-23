import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import featureImage from '../../assets/home/featured.jpg'

const FeaturedMenu = () => {
    return (
        <section className='mb-10 text-white  bg-featured-bg bg-fixed'>
            <div className='bg-black bg-opacity-50 pt-3'>
                <SectionTitle
                    heading={"Featured Item"}
                    subHeading={"check it out"}
                ></SectionTitle>
                <div className='md:flex justify-center  items-center pb-20 pt-6 px-32 '>
                    <div>
                        <img className='rounded-md' src={featureImage} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p>March 23, 2023</p>
                        <h2 className='uppercase'>where can i get some?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae autem, ipsa atque dolor error incidunt fugit ratione eos obcaecati, quod dignissimos itaque quam quibusdam, dolorem at sed voluptatem commodi sint facilis. Eligendi quibusdam consectetur nisi eaque animi repellat maiores.</p>
                        <button className="uppercase rounded-md border-b-2 p-3 hover:bg-purple-400 hover:text-white mt-3">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenu;