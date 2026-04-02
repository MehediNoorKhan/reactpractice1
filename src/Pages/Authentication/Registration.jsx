import React from 'react'
import { useForm } from 'react-hook-form'
import imageUploadingIcon from "../../../assets/image-upload-icon.png"
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

export default function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser } = useAuth();

  const onSubmit = (data) => {

    console.log('Registration data:', data);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log('User created:', user);
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <section className="max-w-[420px] mx-auto flex flex-col items-center py-8">
      <h2 className="text-[40px] font-extrabold text-black text-left w-full mb-1">Create an Account</h2>
      <p className="text-left w-full mb-6 text-gray-700">Register with ZapShift</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
       <div>
          <label className="block text-black text-[15px] mb-1">Profile Image</label>
          <div className="flex items-center gap-2">
            <label className="flex items-center cursor-pointer">
              <img src={imageUploadingIcon} alt="Upload" className="w-8 h-8 mr-2" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                {...register('avatar', { required: 'Profile image is required' })}
              />
              <span className="text-[15px] text-gray-600">Choose image</span>
            </label>
            {errors.avatar && <span className="text-red-500 text-xs ml-2">{errors.avatar.message}</span>}
          </div>
        </div>
        <div>
          <label className="block text-black text-[15px] mb-1">Name</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#8FA748] text-[15px]"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>
        <div>
          <label className="block text-black text-[15px] mb-1">Email</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#8FA748] text-[15px]"
            placeholder="Email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address'
              }
            })}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>
        <div>
          <label className="block text-black text-[15px] mb-1">Password</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#8FA748] text-[15px]"
            placeholder="Password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
          />
          {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
        </div>
       
        <button type="submit" className="w-full bg-[#CAEB66] text-black font-medium py-2 rounded-lg mt-2 mb-1">Register</button>
      </form>
      <div className="w-full text-left mt-2 mb-2 text-[15px]">
        Already have an account? <a href="/login" className="text-[#8FA748]">Login</a>
      </div>
   <SocialLogin />
    </section>
  );
}
