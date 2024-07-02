import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:4000/signin', data);
      const { token, user } = response.data;

      // Save the token to localStorage or a context
      localStorage.setItem('token', token);

      // Redirect or perform additional actions
      console.log('Logged in user:', user);

      // Optionally close the modal
      document.getElementById('my_modal_1').close();
      
      // Redirect to another page if needed
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-black">
          <h3 className="font-bold text-lg ">Login!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                type="submit"
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              >
                Login
              </button>
              <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
            </div>
          </form>
          <div className="modal-action">
            <button
              type="button"
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
