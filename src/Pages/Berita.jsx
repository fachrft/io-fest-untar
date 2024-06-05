import { useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Styles/style.css';

import News from "../assets/images/news.svg";
import GambarBerita from "../Components/Fragments/GambarBerita";
import PilihDay from "../Components/Fragments/PilihDay";

import gambar from "../assets/images/gambar1.svg";
import gambar2 from "../assets/images/gambar2.svg";
import gambar3 from "../assets/images/gambar3.svg";
import gambar4 from "../assets/images/gambar4.svg";

import gambar5 from "../assets/images/gambar4.jpg";
import gambar6 from "../assets/images/gambar6.jpg";
import gambar7 from "../assets/images/gambar7.jpg";
import gambar8 from "../assets/images/gambar8.jpg";

import gambar9 from "../assets/images/gambar9.jpg";
import gambar10 from "../assets/images/gambar10.jpg";
import gambar11 from "../assets/images/gambar11.jpg";
import gambar12 from "../assets/images/gambar12.jpg";
import YoutubeSlide from "../Components/Fragments/YoutubeSlide";

const Berita = () => {
    const [day, setDay] = useState("harian");

    const optionDay = (option) => {
        setDay(option);
    };

    useEffect(() => {
        setDay("harian");
    }, []);
    return (
        <div className="mb-14 lg:px-28 lg:mb-36" id="berita">
            <div className="px-10 mb-5 lg:px-0 lg:mb-10">
                <div className="flex justify-center items-center py-2 text-lg lg:justify-around">
                    <PilihDay text="Harian" onClick={() => optionDay("harian")} border={day === "harian" ? "border-[#27B869] text-[#27B869]" : "border-[#D1D1D6] text-[#D1D1D6]"} />
                    <PilihDay text="Mingguan" onClick={() => optionDay("mingguan")} border={day === "mingguan" ? "border-[#27B869] text-[#27B869]" : "border-[#D1D1D6] text-[#D1D1D6]"} />
                    <PilihDay text="Bulanan" onClick={() => optionDay("bulanan")} border={day === "bulanan" ? "border-[#27B869] text-[#27B869]" : "border-[#D1D1D6] text-[#D1D1D6]"} />
                </div>
            </div>
            <div className="flex justify-center px-7 mb-5 lg:px-0">
                <img className="w-[100vw]" src={News} alt="" />
            </div>
            {day === "harian" && (
                <div className="flex justify-center flex-wrap gap-3 px-5 lg:justify-between lg:px-0">
                    <GambarBerita  link="https://www.kompas.id/baca/humaniora/2023/12/05/emisi-karbon-capai-rekor-tertinggi-ambang-suhu-15-derajat-celcius-segera-terlampaui" image={gambar} text="Tingkat Emisi Karbon Mencap..." />
                    <GambarBerita link="https://www.cnnindonesia.com/teknologi/20231207133125-641-1034123/emisi-karbon-global-sentuh-rekor-tertinggi-tahun-2023/amp" image={gambar2} text="Emisi Karbon Global Sentuh..." />
                    <GambarBerita link="https://ekbis.sindonews.com/read/1245839/34/punya-potensi-besar-indonesia-bisa-jadi-hub-karbon-dunia-1699373497" image={gambar3} text="Punya Potensi Besar Indone..." />
                    <GambarBerita link="https://www.cnbcindonesia.com/news/20240301164404-4-518986/bumi-makin-bahaya-polusi-pecah-rekor-di-2023/amp" image={gambar4} text="Bumi Makin Bahaya..." />
                </div>
            )}
            {day === "mingguan" && (
                <div className="flex justify-center flex-wrap gap-3 px-5 lg:justify-between lg:px-0">
                    <GambarBerita link="https://nasional.sindonews.com/read/1283891/15/hasil-survei-emisi-kendaraan-penyumbang-krisis-iklim-terbesar-1703326349" image={gambar5} text="Hasil Survei: Emisi Kendaar..." />
                    <GambarBerita link="https://www.cnbcindonesia.com/research/20230525072754-128-440369/termasuk-indonesia-ini-negara-penyumbang-polusi-terbesar" image={gambar6} text="Termasuk Indonesia Ini Negara..." />
                    <GambarBerita link="https://ekbis.sindonews.com/read/1195621/178/ojk-terbitkan-aturan-teknis-tata-cara-perdagangan-karbon-berikut-rinciannya-1694074185" image={gambar7} text="OJK Terbitkan Aturan Tek..." />
                    <GambarBerita link="https://www.liputan6.com/amp/5576692/studi-perubahan-iklim-bisa-perburuk-tingkat-kemiskinan-global" image={gambar8} text="Studi Perubahan Iklim Bisa Perbur..." />
                </div>
            )}
            {day === "bulanan" && (
                <div className="flex justify-center flex-wrap gap-3 px-5 lg:justify-between lg:px-0">
                    <GambarBerita link="https://www.voaindonesia.com/a/emisi-co2-global-dari-bahan-bakar-fosil-cetak-rekor-pada-2023-/7384716.html" image={gambar9} text="Emisi CO2 Global Dari Bahan..." />
                    <GambarBerita link="https://katadata.co.id/tags/emisi-karbon" image={gambar10} text="Kata Data Emisi Karbon" />
                    <GambarBerita link="https://www.cnnindonesia.com/ekonomi/20231123114403-532-1027933/sri-mulyani-pepet-global-bantu-transisi-energi-minggu-depan-ke-dubai/amp" image={gambar11} text="Sri Mulyani Pepet Global Ban..." />
                    <GambarBerita link="https://www.cnbcindonesia.com/news/20221114152955-4-387762/top-emisi-karbon-energi-ri-ditekan-hingga-358-juta-ton-co2" image={gambar12} text="Top Emisi Karbon" />
                </div>
            )}
            <div className="bg-hijau mt-10 py-8 px-10">
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    virtual
                >
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/_TQAbv0NSkM?si=BwvhsqCT38v2I49O" image={gambar12}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/PdM2lNQkdBY?si=TkOHstLiz4SZaDym" image={gambar11}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/OfUYo8uqnTs?si=NzspJ73Pe_qPn0zF" image={gambar10}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/JkI4q6ltG2Y?si=0GCAonwCNAgUVtPw" image={gambar9}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/lpHzMfNgs-4?si=vE4Y9W5K5OX_Y87B" image={gambar8}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/MrdwbX-SkYk?si=WMxmFae32rlI_8eY" image={gambar7}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/cXvI0atbdX8?si=N_gqdStv2WyvNUJK" image={gambar6}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/ZGuDsUL2XZ8?si=kyW5pap59NPLZYER" image={gambar5}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/p80qtm_Ojq0?si=5x_vMTgOerppPXUl" image={gambar4}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/l7NZrpYreWg?si=3s6A6zOkmWl3D4_I" image={gambar3}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/Oh52mjvB1DA?si=T-0DkYAUpIxr7GX-" image={gambar2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeSlide link="https://youtu.be/F1GqJKDftMI?si=SEO2Q30kAng_KdBH" image={gambar}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};



export default Berita;
