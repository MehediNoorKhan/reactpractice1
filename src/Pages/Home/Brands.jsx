import React from "react";

import brand1 from "../../../assets/brands/amazon.png";
import brand2 from "../../../assets/brands/amazon_vector.png";
import brand3 from "../../../assets/brands/casio.png";
import brand4 from "../../../assets/brands/moonstar.png";
import brand5 from "../../../assets/brands/randstad.png";
import brand6 from "../../../assets/brands/star.png";
import brand7 from "../../../assets/brands/start_people.png";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
];

export default function Brands() {
  return (
    <section className="py-16 bg-white">
        <h1 className="text-[28px] text-[#03373D] font-extrabold mb-[40px] text-center">We've helped thousands of sales teams</h1>
      
      {/* Fade container */}
      <div className="overflow-hidden fade-mask">
        
        <div className="flex animate-scroll gap-12 items-center">
          
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="min-w-[120px] flex justify-center">
              <img
                src={brand}
                alt="brand"
                className="h-[60px] object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}

        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          /* 🔥 Smooth fade on left & right */
          .fade-mask {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
            mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }
        `}
      </style>
    </section>
  );
}