import React from 'react';
import NavImage from '../../assets/DigiTools.png';
import cardImage from '/products/shopping-cart.png'

const Navbar = ({ cart }) => {
    return (
        <div className='bg-white shadow-md px-2 py-6 md:p-4 lg:p-8 xl:p-0'>
            <div className='container mx-auto flex justify-between items-center sm:p-4'>
                <div>
                    <img src={NavImage} alt="" />
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex gap-8 text-[#101727]'>
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <div className='h-11 w-11 flex items-center justify-center'>
                        <p className='absolute mb-7 ml-6 w-7 h-7 flex justify-center items-center rounded-full'>{cart.length === 0 ? " " : cart.length}</p>
                        <img src={cardImage} alt="" />
                    </div>
                    <div>
                        <h2 className='text-[#101727] hidden md:block'>Login</h2>
                    </div>
                    <div>
                        <button className='btn bg-[#9514FA] text-white font-semibold rounded-full'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;