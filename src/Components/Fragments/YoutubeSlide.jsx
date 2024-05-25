import { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../Styles/style.css';

const YoutubeSlide = () => {
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
          <SwiperSlide >
            <h1>Hello World</h1>
          </SwiperSlide>
          <SwiperSlide >
            <h1>Hello World</h1>
          </SwiperSlide>
      </Swiper>
    </>
  );
}

export default YoutubeSlide
