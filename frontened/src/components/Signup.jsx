import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Login from './Login';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4000/signup', data);
            console.log('Signup successful', response.data);
        
        } catch (error) {
            console.error('Signup failed', error);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className="bg-white p-8 border-2 shadow-md rounded-lg max-w-md w-full">
                <div className="text-black">
                    <h3 className="font-bold text-lg mb-4 text-center">Signup</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='block mb-1'>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Enter your name'
                                    className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500'
                                    {...register('name', { required: true })}
                                />
                                <br />
                                {errors.name && <p className="text-red-500">Name is required</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-1'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Enter your email'
                                    className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500'
                                    {...register('email', { required: true })}
                                />
                                <br />
                                {errors.email && <p className="text-red-500">Email is required</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className='block mb-1'>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder='Enter your password'
                                    className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500'
                                    {...register('password', { required: true })}
                                />
                                <br />
                                {errors.password && <p className="text-red-500">Password is required</p>}
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <button
                                    type="submit"
                                    className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200'
                                >
                                    Signup
                                </button>
                                <p>
                                    Have an account?{' '}
                                    <button
                                        type="button"
                                        className='underline text-blue-500 ml-1'
                                        onClick={() => document.getElementById('my_modal_1').showModal()}
                                    >
                                        Login
                                    </button>
                                </p>
                            </div>
                            <div className="mt-4 text-right">
                                <Link to="/"
                                    className="bg-gray-300 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-400 duration-200"
                                >
                                    Close
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Login />
        </div>
    );
}

export default Signup;
