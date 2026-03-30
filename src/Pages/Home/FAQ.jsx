import React from 'react'

export default function FAQ() {
  return (
    <section className='py-[100px] px-[109px]'>
      <div className='max-w-[832px] mx-auto mb-[40px]'>
        <h2 className='text-[40px] font-extrabold text-center text-gray-800 mb-8'>Frequently Asked Questions</h2>
        <p className='text-[#606060] text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      </div>
      {/* Accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="collapse collapse-arrow bg-base-100 ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">How do I create an account?</div>
          <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
        </div>
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
          <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </div>
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">How do I update my profile information?</div>
          <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
      </div>
    </section>
  )
}
