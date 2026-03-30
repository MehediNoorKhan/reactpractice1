import React from 'react'
import { useForm } from 'react-hook-form'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle login logic here
    console.log('Login data:', data);
  };

  return (
    <section className='max-w-[384px]'>
        <h3 className='font-extrabold text-[42px] text-black'>Welcome Back</h3>
        <p>Login with Zapshift</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label text-[14px] font-medium text-black">Email</label>
            <input 
              type="email" 
              className="input" 
              placeholder="Email" 
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address'
                }
              })}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            <label className="label text-[14px] font-medium text-black">Password</label>
            <input 
              type="password" 
              className="input" 
              placeholder="Password" 
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
            />
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
            <div><a className="link link-hover text-[#71717A]">Forgot password?</a></div>
            <button type="submit" className="bg-[#CAEB66] font-medium py-2 rounded-lg cursor-pointer">Login</button>
          </fieldset>
        </form>
        <div className='flex flex-col justify-center'>
            <p>Don't have any account? <a className="link link-hover text-[#8FA748]" href="/register">Register</a></p>
            <p className='text-center'>Or</p>
            <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </div>
    </section>
  )
}
