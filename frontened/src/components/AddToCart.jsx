import React from 'react'
import { useCart } from 'react-use-cart'

function AddToCart() {
    const { isEmpty, totalUniqueItems, totalItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

    if (isEmpty) {
        return <h1 className='text-center text-xl mt-20'>Your Cart is Empty</h1>;
    }

    return (
        <section className='py-8 container mx-auto '>
            <div className='flex justify-center mt-28 '>
                <div className='w-full max-w-3xl '>
                    <h3 className='text-2xl font-semibold mb-6 '>Cart {totalItems} total items</h3>
                    {items.map((item, index) => (
                        <div key={index} className='flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow-md rounded-lg mb-4'>
                            <div className='flex items-center w-full md:w-3/5'>
                                <img src={item.image} alt={item.name} className='w-24 h-24 object-cover rounded-md' />
                                <div className='ml-4'>
                                    <h4 className='text-lg font-semibold'>{item.name}</h4>
                                    <p className='text-gray-600'>${item.price}</p>
                                </div>
                            </div>
                            <div className='flex items-center mt-4 md:mt-0'>
                                <button className='text-sm px-2 py-1 bg-gray-300 text-white rounded-md' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <span className='mx-2 text-lg'>{item.quantity}</span>
                                <button className='text-sm px-2 py-1 bg-gray-300 text-white rounded-md' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                <button className='text-sm ml-4 px-2 py-1 bg-pink-600 text-white rounded-md' onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className='text-right'>
                        <h4 className='text-xl font-semibold'>Total: ${cartTotal.toFixed(2)}</h4>
                        <button className='mt-4 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700' onClick={emptyCart}>Clear Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddToCart;
