
import React from 'react';
import merchantImage from '../../../assets/location-merchant.svg';
import beMerchantBg from '../../../assets/be-a-merchant-bg.png';

export default function BeMarchent() {
  return (
    <div
      className="p-20 mb-25 rounded-3xl bg-[#03373D]"
      style={{ backgroundImage: `url(${beMerchantBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={merchantImage}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Merchant Location"
        />
        <div>
          <h1 className="text-5xl font-bold text-[#ffffff]">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 max-w-129 text-[#ffffff]">
            We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-[#CAEB66] rounded-full px-8 py-4 font-bold text-[20px] cursor-pointer">
              Become a Merchant
            </button>
            <button className="outline outline-[#CAEB66] text-[#CAEB66] px-6 py-4 rounded-full text-[20px] font-bold cursor-pointer">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
