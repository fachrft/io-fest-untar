import { useState, useEffect } from "react";
import News from '../assets/images/news.svg'
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

import gambar9 from '../assets/images/gambar9.jpg';
import gambar10 from '../assets/images/gambar10.jpg';
import gambar11 from '../assets/images/gambar11.jpg';
import gambar12 from '../assets/images/gambar12.jpg';

const Berita = () => {
    const [day, setDay] = useState("harian");

    const optionDay = (option) => {
        setDay(option);
    };

    useEffect(() => {
        setDay("harian");
    }, []);
    return (
        <div className="mb-14 lg:px-28 lg:mb-36">
            <div className="px-10 mb-5 lg:px-0 lg:mb-10">
                <div className="flex justify-center items-center py-2 text-lg lg:justify-around">
                    <PilihDay text="Harian" onClick={() => optionDay("harian")} border={day === 'harian' ? 'border-[#27B869] text-[#27B869]' : 'border-[#D1D1D6] text-[#D1D1D6]'}/>
                    <PilihDay text="Mingguan" onClick={() => optionDay("mingguan")} border={day === 'mingguan' ? 'border-[#27B869] text-[#27B869]' : 'border-[#D1D1D6] text-[#D1D1D6]'} />
                    <PilihDay text="Bulanan" onClick={() => optionDay("bulanan")} border={day === 'bulanan' ? 'border-[#27B869] text-[#27B869]' : 'border-[#D1D1D6] text-[#D1D1D6]'}/>
                </div>
            </div>
            <div className="flex justify-center px-7 mb-5 lg:px-0">
                <img className="w-[100vw]" src={News} alt="" />
            </div>
            {day === "harian" && (
                <div className="flex justify-center flex-wrap gap-3 px-5 lg:justify-between lg:px-0">
                    <GambarBerita image={gambar} text="Termasuk Indonesia, Ini Ne..." />
                    <GambarBerita image={gambar2} text="Emisi Karbon Global Sentuh..." />
                    <GambarBerita image={gambar3} text="Tingkat Emisi Karbon Menc..." />
                    <GambarBerita image={gambar4} text="Bumi Makin Bahaya..." />
                </div>
            )}
            {day === "mingguan" && (
                <div className="flex justify-center flex-wrap gap-3 px-5 lg:justify-between lg:px-0">
                    <GambarBerita image={gambar5} text="Hasil Survei: Emisi Kendaar..." />
                    <GambarBerita image={gambar6} text="Punya Potensi Besar, Indone..." />
                    <GambarBerita image={gambar7} text="OJK Terbitkan Aturan Tek..." />
                    <GambarBerita image={gambar8} text="Emisi Karbon Global..." />
                </div>
            )}
            {day === "bulanan" && (
                <div className="flex justify-center flex-wrap gap-3 px-5 lg:justify-between lg:px-0">
                    <GambarBerita image={gambar9} text="Termasuk Indonesia, Ini..." />
                    <GambarBerita image={gambar10} text="Bumi Makin Bahaya, Polu..." />
                    <GambarBerita image={gambar11} text="Sri Mulyani Pepet Global Ban..." />
                    <GambarBerita image={gambar12} text="Studi: Perubahan Iklim Bis..." />
                </div>
            )}
            <div className="bg-hijau"></div>
        </div>
    );
};

export default Berita;
