import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'
import axios from 'axios'
import {useCart} from 'react-use-cart'


function Menu() {
  const {addItem} = useCart();
  const [dishes , setDish] = useState([]);
  useEffect(()=>{
    const getDish = async()=>{
      try {
       const resp = await axios.get("http://localhost:4000/menu");
       console.log(resp.data);
       setDish(resp.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getDish();
  },[])
  const handleAddToCart = (dish)=>{
  addItem(dish);

   
  }
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-bold md:text-4xl'>
            Delicious Dishes Crafted with
            <span className='text-pink-600'> Fresh Ingredients and Love!</span>
          </h1>
          <p className='mt-12 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            deserunt est repellendus quis tempora voluptatum maiores sed
            laudantium consequatur,Odit deserunt est repellendus quis tempora
            voluptatum maiores sed laudantium consequatur voluptatum maiores sed
          </p>
          <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button></Link>
       
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {dishes.map((dish) => (
            <div key={dish.id} className='bg-white p-4 shadow-xl rounded-lg flex flex-col hover:scale-105 duration-200'>
              <img
                src={dish.image}
                alt={dish.name}
                className='w-full h-48 object-cover mb-4 rounded-t-lg'
              />
              <h3 className='text-xl font-bold'>{dish.name}</h3>
              <p className='text-gray-700 flex-grow'>{dish.description}</p>
              <p className='text-gray-900 font-bold'>${dish.price}</p>
              <Link to ="/cart">
              <button className='mt-4 w-36 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'
              onClick={()=>handleAddToCart(dish)}>
                Add to Cart
              </button> </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
