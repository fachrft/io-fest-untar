// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import LampuKuning from "../../assets/vektor/lampu-kuning.svg";
import MesinCuci from "../../assets/vektor/mesin-cuci.svg";
import Shower from "../../assets/vektor/shower.svg";

import Sepeda from '../../assets/vektor/sepeda.svg'
import BusSekolah from '../../assets/vektor/bus-sekolah.svg'
import Mobil from '../../assets/vektor/mobil.svg'

import Daging from '../../assets/vektor/daging.svg'
import Sayuran from '../../assets/vektor/sayuran.svg'
import FastFood from '../../assets/vektor/fast-food.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../../Styles/style.css";

const SwiperCardsSolusi = () => {
    return (
        <div className="w-[300px] lg:w-[25vw]" data-aos="fade-left">
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} loop={true} className="mySwiper">
                <div className="swiper-wrapper">
                    <SwiperSlide className="text-black flex justify-center items-center rounded-lg ">
                        <div className="w-[300px] h-[380px] rounded- bg-hijau flex flex-col pt-16 gap-5 items-center px-7 lg:w-[400px] lg:h-[500px] lg:px-12">
                            <div>
                                <h1 className="font-semibold text-lg lg:text-2xl">Memiliki Perlengkapan ramah lingkungan</h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <img className="lg:w-[90px]" src={LampuKuning} alt="" />
                                <img className="lg:w-[90px]" src={MesinCuci} alt="" />
                                <img className="lg:w-[90px]" src={Shower} alt="" />
                            </div>
                            <div>
                                <p className="text-sm font-normal lg:text-lg">Contoh = mengunakan lampu LED Fungsi = menghemat 2/3 energi dibanding bola lampu biasa</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-black flex justify-center items-center w-[300px] rounded-lg">
                        <div className="w-[300px] h-[380px] bg-hijau flex flex-col pt-16 gap-5 items-center px-7 lg:w-[400px] lg:h-[500px] lg:px-12">
                            <div>
                                <h1 className="font-semibold text-lg lg:text-2xl">Memilih menggunakan transportasi umum</h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <img className="lg:w-[90px]" src={Sepeda} alt="" />
                                <img className="lg:w-[90px]" src={BusSekolah} alt="" />
                                <img className="lg:w-[90px]" src={Mobil} alt="" />
                            </div>
                            <div>
                                <p className="text-sm font-normal lg:text-lg">Contoh = Naik bus atau kereta Fungsi = Kurangi emisi dan padatnya lalu lintas</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-black flex justify-center items-center w-[300px] rounded-lg">
                        <div className="w-[300px] h-[380px] bg-hijau flex flex-col pt-16 gap-5 items-center px-7 lg:w-[400px] lg:h-[500px] lg:px-12">
                            <div>
                                <h1 className="font-semibold text-lg lg:text-2xl">Memilih makanan yang berkelanjutan</h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <img className="lg:w-[90px]" src={Daging} alt="" />
                                <img className="lg:w-[90px]" src={Sayuran} alt="" />
                                <img className="lg:w-[90px]" src={FastFood} alt="" />
                            </div>
                            <div>
                                <p className="text-sm font-normal lg:text-lg">Contoh = Konsumsi produk lokal dan organik Fungsi = Turunkan emisi transportasi, dukung pertanian ramah lingkunga</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default SwiperCardsSolusi;
