// import Swiper core and required modules
import { A11y, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import { ResponsiveImage } from "./ResponsiveImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

interface ImageData {
  src: string;
  alt: string;
}

interface SwiperProps {
  imageData: ImageData[];
}

export function SlideImg2({ imageData: imageData }: SwiperProps) {
  return (
    <SSwiper
      modules={[A11y, Autoplay, EffectFade]}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      effect="fade"
      autoplay={{ delay: 5000 }}
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
  );
}

const SSwiper = styled(Swiper)`
  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: #fff;
    /* 縁を黒くする */
    text-shadow: 0 0 2px #000;
  }
  z-index: -1;
`;

const SSwiperSlide = styled(SwiperSlide)`
  height: 80vh;
`;
