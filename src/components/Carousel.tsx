"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Carousel = () => {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        breakpoints={{
          // when window width is >= 320px

          0: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
            slidesPerGroup: 1,
          },
          1336: {
            slidesPerView: 3,
            spaceBetween: 42,
          },
        }}
        spaceBetween={20}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hover:scale-110 duration-500 ease-in-out space-y-2">
            <div className="max-w-sm mx-auto">
              <div className="w-full relative h-96 ">
                <Image
                  src="/assets/images/g3.png"
                  alt="g3"
                  fill
                  className="object-"
                />
              </div>
              <div>
                <h1 className="font-semibold text-lg text-[#212121]">
                  Brushed Raglan Sweatshirt
                </h1>

                <h2 className="font-semibold text-lg text-[#212121]">
                  $195.00{" "}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hover:scale-110 duration-500 ease-in-out space-y-2">
            <div className="max-w-sm mx-auto">
              <div className="w-full relative h-96 ">
                <Image
                  src="/assets/images/g3.png"
                  alt="g3"
                  fill
                  className="object-"
                />
              </div>
              <div>
                <h1 className="font-semibold text-lg text-[#212121]">
                  Brushed Raglan Sweatshirt
                </h1>

                <h2 className="font-semibold text-lg text-[#212121]">
                  $195.00{" "}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hover:scale-110 duration-500 ease-in-out space-y-2">
            <div className="max-w-sm mx-auto">
              <div className="w-full relative h-96 ">
                <Image
                  src="/assets/images/g3.png"
                  alt="g3"
                  fill
                  className="object-"
                />
              </div>
              <div>
                <h1 className="font-semibold text-lg text-[#212121]">
                  Brushed Raglan Sweatshirt
                </h1>

                <h2 className="font-semibold text-lg text-[#212121]">
                  $195.00{" "}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hover:scale-110 duration-500 ease-in-out space-y-2">
            <div className="max-w-sm mx-auto">
              <div className="w-full relative h-96 ">
                <Image
                  src="/assets/images/g3.png"
                  alt="g3"
                  fill
                  className="object-"
                />
              </div>
              <div>
                <h1 className="font-semibold text-lg text-[#212121]">
                  Brushed Raglan Sweatshirt
                </h1>

                <h2 className="font-semibold text-lg text-[#212121]">
                  $195.00{" "}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
