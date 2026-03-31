import React from 'react';
import userImage from '../../assets/user.png';
import ImageTwo from '../../assets/package.png';
import rocket from '../../assets/rocket.png';

const Step = () => {
    return (
        <div className='bg-[#F9FAFC] py-30 p-4 md:p-4 lg:p-4 xl:p-30'>
            <div className='container mx-auto'>
                <h1 className='text-[#101727] text-center font-extrabold text-5xl'>Get Started in 3 Steps</h1>
                <p className='mt-4 text-[#627382] text-center mb-10'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    <div className='bg-white pt-5 pr-5 pl-6 pb-20 rounded-lg'>
                        <div className='flex justify-end'>
                            <div className='bg-[#9514FA] p-3 rounded-full text-white w-10 h-10'>01</div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-24 h-24 bg-gray-300 overflow-hidden rounded-full flex justify-center items-center'>
                                <img src={userImage} className='object-cover' alt="" />
                            </div>
                        </div>
                        <h1 className='text-center mt-4 font-bold text-2xl text-[#101727]'>Create Account</h1>
                        <p className='mt-4 text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='bg-white pt-5 pr-5 pl-6 pb-20 rounded-lg'>
                        <div className='flex justify-end'>
                            <div className='bg-[#9514FA] p-3 rounded-full text-white w-10 h-10'>02</div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-24 h-24 bg-gray-300 overflow-hidden rounded-full flex justify-center items-center'>
                                <img src={ImageTwo} className='object-cover' alt="" />
                            </div>
                        </div>
                        <h1 className='text-center mt-4 font-bold text-2xl text-[#101727]'>Choose Products</h1>
                        <p className='mt-4 text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='bg-white pt-5 pr-5 pl-6 pb-20 rounded-lg'>
                        <div className='flex justify-end'>
                            <div className='bg-[#9514FA] p-3 rounded-full text-white w-10 h-10'>03</div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-24 h-24 bg-gray-300 overflow-hidden rounded-full flex justify-center items-center'>
                                <img src={rocket} className='object-cover' alt="" />
                            </div>
                        </div>
                        <h1 className='text-center mt-4 font-bold text-2xl text-[#101727]'>Start Creating</h1>
                        <p className='mt-4 text-[#627382] text-center'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step;