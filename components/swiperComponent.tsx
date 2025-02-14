"use client"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules"; 
import { products } from "@/modals"; 
import Product from "@/pages/_product"; 

export default function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-[80%]"
      loop={true}
      modules={[Pagination, Navigation]} // Changed from 'module' to 'modules'
    >
      {products.map((item, index) => {
        // Added index as the second argument for key
        return (
          <SwiperSlide key={index}>
            {" "}
            // Added key prop to avoid warning/errors
            <Product item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
