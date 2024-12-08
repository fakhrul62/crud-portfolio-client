import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[url(https://i.ibb.co.com/1bTKQVk/pexels-rudy-kirchner-278171-1750823.jpg)] bg-cover bg-no-repeat bg-center my-3 rounded-2xl pt-40'>
            <div className='grid grid-cols-3 gap-5 w-10/12 mx-auto'>
                <div className='bg-gray-900 p-5 rounded-2xl'>
                    <h2 className='font-heading text-center text-xl font-bold mb-4'>Fakhrul ALam</h2>
                    <h3 className='font-body text-center'>Full Stack Developer</h3>
                </div>
                <div className='col-span-2'></div>
            </div>
        </div>
    );
};

export default Hero;