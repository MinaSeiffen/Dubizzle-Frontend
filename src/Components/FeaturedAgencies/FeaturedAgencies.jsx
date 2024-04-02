
import React from 'react';
import feature1 from '../../assets/images/feature1.jpg'
import featureHH from '../../assets/images/feature2.jpg'
import feature3 from '../../assets/images/feature3.jpg'
import feature4 from '../../assets/images/feature4.jpg'
import { Carousel } from 'antd';

const FeaturedAgencies = () => {
    return (
        <div className='p-4 bg-gray-100'>
            <p className='text-2xl mb-3 font-bold'>Explore Featured Agencies</p>
            <p className='text-md mb-2 text-gray-600'>Explore our trusted agencies</p>

            <div className='flex gap-4'>
                <div className='w-1/4  bg-white text-center'><img className='img-fluid mb-3' src={feature1} /><p className='text-lg font-bold'>Smart Group Development</p></div>
                <div className='w-1/4  bg-white text-center'><img className='img-fluid mb-3' src={featureHH} /><p className='text-lg font-bold'>Imkan Investment</p></div>
                <div className='w-1/4  bg-white text-center'><img className='img-fluid mb-3' src={feature3} /><p className='text-lg font-bold'>4 C</p></div>
                <div className='w-1/4  bg-white text-center'><img className='img-fluid mb-3' src={feature4} /><p className='text-lg font-bold'>Value real estate development</p></div>
            </div>
            <p className='text-xl mt-3 font-bold'>Become a trusted Agency ?</p>
            <p className='text-lg mt-4'>Join our ever growing group of brokers covering all of Egypt</p>

        </div>
    );
}

export default FeaturedAgencies;
