import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

function PopularDishes() {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };

  return (
    <section id="popular-dishes" className="`max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Popular Dishes</h2>
        <p className='text-xl my-5'>Discover culinary excellence with our popular dishes, crafted to delight your senses and satisfy your cravings</p>
        <Slider {...settings}>
          {dishes.map((dish) => (
            <div key={dish.id} className="bg-white p-4 shadow-xl hover:scale-105 duration-200 ">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-72 h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{dish.name}</h3>
              <p className="text-gray-700">{dish.description}</p>
              <p className="text-gray-900 font-bold">${dish.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default PopularDishes;
