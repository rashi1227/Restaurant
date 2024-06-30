import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Check if this logs data to the console
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-black">
          <h3 className="font-bold text-lg ">Login!</h3>
          <div className='mt-4 space-y-3'>
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder='Enter your email'
              className='w-80 px-3 border rounded-md outline-none py-1'
              {...register('email', { required: true })}
            />
            <br />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          {/* Password */}
          <div className='mt-4 space-y-3'>
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder='Enter your password'
              className='w-80 px-3 border rounded-md outline-none py-1'
              {...register('password', { required: true })}
            />
            <br />
            {errors.password && <p className="text-red-500">Password is required</p>}
          </div>

          <div className='flex justify-around mt-6 ml-2'>
            <button
              type="button" // Ensure this is type="button"
              onClick={handleSubmit(onSubmit)}
              className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
            >
              Login
            </button>
            <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
          </div>

          <div className="modal-action">
            <button
              type="button" // Ensure this is type="button"
              onClick={() => document.getElementById('my_modal_1').close()}
              className="bg-gray-300 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-400 duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
