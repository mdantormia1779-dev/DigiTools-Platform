import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Card = ({ allCard, cart, setCart }) => {
    const [addedItem, setAddedItem] = useState({});
    const handleBuy = (card) => {
        const exist = cart.find(item => item.id === card.id);
        if (exist) {
            toast.error("Item already in cart!");
            return;
        }

        setCart([...cart, card])
        setAddedItem({...addedItem,[card.id]:true})
        toast.success("Item added sucessfully.")
    }
    return (
        <div className='grid grid-cols-3 gap-8 container mx-auto'>
            {
                allCard.map((card) => {
                    return (
                        <div key={card.id} className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <div><img src={card.icon} alt="" /></div>
                                    <span className={`badge badge-xs ${card.tag === "best seller" ? "badge-warning bg-[#FEF3C6] text-[#BB4D00]" :
                                        card.tag === "popular" ? "badge-primary bg-[#E1E7FF] text-[#9514FA]" :
                                            "bg-[#DBFCE7] text-[#0A883E] badge-info"
                                        } `}>{card.tag}</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">{card.name}</h2>
                                    <p className='mt-4 text-[#627382]'>{card.description}</p>
                                    <span className="text-xl mt-4 mb-4">${card.price}/mo</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    {
                                        card.features.map((li, index) => {
                                            return (
                                                <li key={index}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 mr-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>{li}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="mt-6">
                                    <button className={`btn btn-primary btn-block ${addedItem[card.id] ? "bg-green-900" : "bg-[#9514FA]"}`} onClick={()=>handleBuy(card)}>{addedItem[card.id] ? "Added to Card" : "Buy Now"}</button>
                                </div>
                            </div>
                        </div>)
                })
            }
        </div>
    );
};

export default Card;