import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ image, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={image}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[500px] md:px-24 md:pt-36 md:pb-24">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-semibold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;