import React, { use } from 'react';
import Card from '../Card/Card';


const Cards = ({promiseData,cart,setCart}) => {
    const allCard=use(promiseData);
    return (
        <div className='bg-[#FFFFFF] mb-30 mt-10 container p-2 mx-auto md:p-4 lg:p-4 xl:p-0'>
            <Card allCard={allCard} cart={cart} setCart={setCart}/>
        </div>
    );
};

export default Cards;