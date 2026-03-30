import React from 'react';
import CartImage from '../../../public/products/shopping-cart.png';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const removeItem = (id) => {
        const filtered = cart.filter(item => item.id !== id);
        setCart(filtered)
    }
    return (
        <div className='border-2 border-[#F2F2F2] container mx-auto p-10 mb-28 rounded-lg'>
            <h1 className='font-bold text-2xl text-[#101727]'>Your Cart</h1>
            {
                cart.length === 0 ? <div className='flex justify-center flex-col items-center p-11'>
                    <img src={CartImage} className='w-20' alt="" />
                    <p className='mt-4'>Your Cart is Empty</p>
                </div> : <div>
                    {
                        cart.map((item) => {
                            return (
                                <div key={item.id} className='bg-[#F9FAFC] p-5 mt-6 flex justify-between items-center rounded-lg'>
                                    <div className='flex justify-center items-center gap-4'>
                                        <div><img src={item.icon} alt="" /></div>
                                        <div>
                                            <h1 className='text-xl font-semibold text-[#101727] mb-2'>{item.name}</h1>
                                            <p className='font-medium text-[#627382]'>${item.price}</p>
                                        </div>
                                    </div>
                                    <div onClick={() => { removeItem(item.id), toast.error("Item remove sucessfull!") }} className='cursor-pointer text-[#FF3980] font-bold text-[16px]'>Remove</div>
                                </div>
                            )
                        })
                    }
                    <div className='mt-6 flex justify-between items-center mb-6'>
                        <p className='text-[#627382]'>Total:</p>
                        <p className='text-[#101727] font-bold text-2xl'>${total.toFixed(2)}</p>
                    </div>
                    <div>
                        <button onClick={() => setCart([])} className="btn btn-block bg-[#9514FA] text-white font-bold">Proceed to Checkout</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default Cart;