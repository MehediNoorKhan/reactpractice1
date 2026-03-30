import React from 'react';
import { useForm } from 'react-hook-form';

export default function ResetPassword() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    // Handle reset password logic here
    console.log('Reset password data:', data);
  };

  return (
    <section className="max-w-[384px] mx-auto flex flex-col items-center py-8">
      <h2 className="text-[36px] font-extrabold text-black text-left w-full mb-1">Reset Password</h2>
      <p className="text-left w-full mb-6 text-gray-700">Enter your new password below</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        <div>
          <label className="block text-black text-[15px] mb-1">New Password</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#8FA748] text-[15px]"
            placeholder="New Password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
        </div>
        <div>
          <label className="block text-black text-[15px] mb-1">Confirm Password</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#8FA748] text-[15px]"
            placeholder="Confirm Password"
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: value => value === watch('password') || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-[#CAEB66] font-medium py-2 rounded-lg cursor-pointer mt-2"
        >
          Reset Password
        </button>
      </form>
    </section>
  );
}
