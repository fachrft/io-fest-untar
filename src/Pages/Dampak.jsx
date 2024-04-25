import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import CardDampak from "../Components/Fragments/CardDampak";
import { isiCard } from "../Data/isiCardDampakEmisi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Styles/style.css";

const Dampak = () => {
    return (
        <div className="mb-14 lg:px-28 lg:mb-36">
            <div className="bg-biru h-16 flex justify-center items-center text-white mb-16 lg:py-16">
                <h1 className="font-semibold text-xl lg:text-2xl">Dampak Dari Emisi Karbon</h1>
            </div>
            <div className="">
                <div className="container">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {isiCard.map((card) => (
                            <SwiperSlide key={card.id} className="mb-16">
                                <CardDampak 
                                gambar={card.image}
                                penjelasan={card.desc}
                                bg={(card.id % 2 == 0) ? 'bg-[#57AE09]' : 'bg-[#9DD462]'}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Dampak;
