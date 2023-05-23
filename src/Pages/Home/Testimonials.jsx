import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";


const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return (
        <div className='my-10'>
            <SectionTitle
                heading={"Testimonials"}
                subHeading={"What our clients say"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    review.map(r => <SwiperSlide
                        key={r._id}
                    >
                        <div className='flex flex-col items-center m-24'>
                            <Rating style={{ maxWidth: 150 }}
                                value={r.rating}
                            />
                            <p className='pt-4 pb-2'>{r.details}</p>
                            <h2 className='text-2xl text-orange-400'>{r.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;