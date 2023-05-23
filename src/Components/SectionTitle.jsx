import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center md:w-3/12 mx-auto my-8'>
            <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
            <h3 className='text-3xl font-medium uppercase border-y-2 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;