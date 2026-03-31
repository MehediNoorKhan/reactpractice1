import React from "react";
import safedelivery from "../../../assets/safe_delivery_illustration.svg";
import liveTracking from "../../../assets/live_parcel_tracking_illustration.svg";

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    image: liveTracking,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: safedelivery,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: safedelivery,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-[80px] border-t border-b border-dashed border-gray-300 mb-[80px] " 
    data-aos="fade-up" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-red-100 rounded-xl p-[32px] flex items-center"
          >
            
            {/* Left Illustration */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="max-w-[190px] h-[200px] object-contain"
              />
            </div>

            {/* Vertical Dashed Line */}
            <div className="mx-[24px] h-[150px] border-l border-dashed border-[#03373D]" />

            {/* Right Content */}
            <div className="text-left">
              <h3 className="text-[24px] font-extrabold text-[#03373D]">
                {item.title}
              </h3>

              <p className="mt-[16px] text-[#606060] font-medium">
                {item.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}