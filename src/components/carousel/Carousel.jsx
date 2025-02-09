"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Banner = () => {
  return (
    <div className="w- mx-auto h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        className="h-[700px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="/assets/images/banner/1.jpg"
              alt="Car Servicing"
              className="object-cover w-full h-screen"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-10">
              <h2 className="text-white text-4xl font-bold mb-4">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-white mb-6">
                There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form
              </p>
              <div className="flex gap-4">
                <button className="bg-red-500 text-white px-6 py-2 rounded-md">Discover More</button>
                <button className="bg-gray-700 text-white px-6 py-2 rounded-md">Latest Project</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="/assets/images/banner/2.jpg"
              alt="Car Servicing 2"
              className="object-cover w-full h-screen"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-10">
              <h2 className="text-white text-4xl font-bold mb-4">
                Best Quality Auto Repairing
              </h2>
              <p className="text-white mb-6">
                Our Professional Mechanics Ensure The Best Service Experience.
              </p>
              <div className="flex gap-4">
                <button className="bg-red-500 text-white px-6 py-2 rounded-md">Discover More</button>
                <button className="bg-gray-700 text-white px-6 py-2 rounded-md">Latest Project</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="/assets/images/banner/3.jpg"
              alt="Car Servicing 3"
              className="object-cover w-full h-screen"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-10">
              <h2 className="text-white text-4xl font-bold mb-4">
                Get Your Car Fixed Today!
              </h2>
              <p className="text-white mb-6">
                Quick, Affordable, and Reliable Auto Servicing.
              </p>
              <div className="flex gap-4">
                <button className="bg-red-500 text-white px-6 py-2 rounded-md">Discover More</button>
                <button className="bg-gray-700 text-white px-6 py-2 rounded-md">Latest Project</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

         {/* Slide 5*/}
         <SwiperSlide>
          <div className="relative h-full">
            <img
              src="/assets/images/banner/4.jpg"
              alt="Car Servicing 3"
              className="object-cover w-full h-screen"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-10">
              <h2 className="text-white text-4xl font-bold mb-4">
                Get Your Car Fixed Today!
              </h2>
              <p className="text-white mb-6">
                Quick, Affordable, and Reliable Auto Servicing.
              </p>
              <div className="flex gap-4">
                <button className="bg-red-500 text-white px-6 py-2 rounded-md">Discover More</button>
                <button className="bg-gray-700 text-white px-6 py-2 rounded-md">Latest Project</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

         {/* Slide 6 */}
         <SwiperSlide>
          <div className="relative h-full">
            <img
              src="/assets/images/banner/5.jpg"
              alt="Car Servicing 3"
              className="object-cover w-full h-screen"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-10">
              <h2 className="text-white text-4xl font-bold mb-4">
                Get Your Car Fixed Today!
              </h2>
              <p className="text-white mb-6">
                Quick, Affordable, and Reliable Auto Servicing.
              </p>
              <div className="flex gap-4">
                <button className="bg-red-500 text-white px-6 py-2 rounded-md">Discover More</button>
                <button className="bg-gray-700 text-white px-6 py-2 rounded-md">Latest Project</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
        {/* Custom Navigation Buttons */}
        <div className="absolute top-3/4 right-24 z-10">
        <button className="prev-btn  bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-300">
          ❮
        </button>
      </div>
      <div className="absolute top-3/4 right-12 z-10">
        <button className="next-btn bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-300">
          ❯
        </button>
      </div>
    </div>
    
  );
};

export default Banner;
