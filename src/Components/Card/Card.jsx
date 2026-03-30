import React from 'react';
import CardImage from '../../assets/products/writing_2327400 1.png';

const Card = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div><img src={CardImage} alt="" /></div>
                        <span className="badge badge-xs badge-warning">Best Seller</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">AI Writing Pro</h2>
                        <p className='mt-4 text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <span className="text-xl mt-4 mb-4">$29/mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Batch processing capabilities</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;