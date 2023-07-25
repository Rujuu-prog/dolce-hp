import React, { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Thumbs, Navigation, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import { ResponsiveImage } from "./ResponsiveImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/thumbs";

interface ImageData {
  src: string;
  alt: string;
}

interface SwiperProps {
  imageData: ImageData[];
}

export function ThumbsSlideImg({ imageData: imageData }: SwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <SThumbsSlideImg>
      <SSwiper
        modules={[FreeMode, Navigation, A11y, Thumbs, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        onSwiper={() => setThumbsSwiper}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{
          type: "fraction",
        }}
      >
        {imageData.map((image) => (
          <SSwiperSlide key={image.alt}>
            <ResponsiveImage
              className="slide-img"
              src={image.src}
              alt={image.alt}
            />
          </SSwiperSlide>
        ))}
      </SSwiper>

      <SSideSwiper
        className="side-swiper"
        modules={[FreeMode, Navigation, A11y, Thumbs]}
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress
        freeMode={{
          enabled: true,
          momentumRatio: 0.3,
          momentumVelocityRatio: 0.35,
        }}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        {imageData.map((image) => (
          <SwiperSlide key={image.alt}>
            <ResponsiveImage
              className="slide-img"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </SSideSwiper>
    </SThumbsSlideImg>
  );
}

const SThumbsSlideImg = styled.div`
  height: 80vh;

  @media (max-width: 768px) {
    height: 90vh;
  }
`;

const SSwiper = styled(Swiper)`
  height: 70%;
  --swiper-pagination-fraction-color: #fff;
  text-shadow: 0 0 2px #000;
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    /* 縁を黒くする */
    text-shadow: 0 0 2px #000;
  }
  @media (max-width: 767px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

const SSideSwiper = styled(Swiper)`
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
  & .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  & .swiper-slide-thumb-active {
    opacity: 1;
  }
`;

const SSwiperSlide = styled(SwiperSlide)`
  height: 100%;
`;
