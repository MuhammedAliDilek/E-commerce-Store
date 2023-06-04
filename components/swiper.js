import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import "swiper/swiper.min.css";
/* import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css"; */

SwiperCore.use([Navigation, Pagination]);
SwiperCore.use(Autoplay);

const SwiperAds = ({ items }) => {
  const params = {
    spaceBetween: 30,
    slidesPerView: "3",
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000, // in milliseconds
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };

  let id = 0;

  return (
    <div className="padding-4">
      <Swiper {...params}>
        {items?.map((item) => (
          <SwiperSlide key={id++}>
            <div className="p-4 rounded-lg border border-gray-200 shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-lg"
                width={600}
                height={400}
              />
              <h3 className="text-lg font-medium mt-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                {/* Buy now button */}
                {/*  <span className="text-gray-800 font-bold text-xl">
                  {item.price}
                </span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                  Buy now
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev flex items-center justify-center absolute top-1/2 opacity-20 hover:opacity-100">
          <RiArrowLeftSLine size={24} />
        </div>
        <div className="swiper-button-next flex items-center justify-center absolute top-1/2 opacity-20 hover:opacity-100">
          <RiArrowRightSLine size={24} />
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperAds;
