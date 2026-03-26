import React from "react";
import {
  FaShippingFast,
  FaGlobeAsia,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndoAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: FaShippingFast,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: FaGlobeAsia,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: FaWarehouse,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: FaBuilding,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: FaUndoAlt,
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#03373D] py-[100px] px-4 rounded-xl">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-[40px] font-extrabold text-white">
          Our Services
        </h2>

        {/* Description */}
        <div className="max-w-[718px] mx-auto mt-4">
          <p className="text-white/80 text-[16px]">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="max-w-[410px] w-full rounded-xl bg-white p-[32px] text-center transition-all duration-300 hover:bg-[#CAEB66]"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-[#F1F5F9] p-4 rounded-full">
                    <Icon className="text-[28px] text-[#03373D]" />
                  </div>
                </div>

                {/* Title */}
                <div className="max-w-[255px] mx-auto">
                  <h3 className="text-[24px] font-bold text-[#03373D]">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="max-w-[362px] mx-auto px-2 mt-2">
                  <p className="text-[16px] font-medium text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}