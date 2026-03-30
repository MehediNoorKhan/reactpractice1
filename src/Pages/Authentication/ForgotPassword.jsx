import React from 'react'
import { useForm } from 'react-hook-form'

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle forgot password logic here
    // For file: data.avatar[0] is the uploaded file
    console.log('Forgot Password data:', data);
  };

  return (
    <section className="max-w-[420px] mx-auto flex flex-col items-center py-8">
      <h2 className="text-[40px] font-extrabold text-black text-left w-full mb-1">Forgot Password</h2>
      <p className="text-left w-full mb-6 text-gray-700">Enter your email address and we will send you a link</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
       
       
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
       
        <button type="submit" className="w-full bg-[#CAEB66] text-black font-medium py-2 rounded-lg mt-2 mb-1">Send</button>
      </form>
      <div className="w-full text-left mt-2 mb-2 text-[15px]">
        Remember your password? <a href="/login" className="text-[#8FA748]">Login</a>
      </div>
     
     
    </section>
  );
}
