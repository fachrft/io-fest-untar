import Rumput from "../assets/vektor/rumput.svg";
import Vespa from "../assets/icon/vespa.svg";
import Colokan from "../assets/icon/colokan.svg";
import Pabrik from "../assets/icon/pabrik.svg";
import Akar from "../assets/icon/akar.svg";

import { useState, useEffect, useRef } from "react";

import OptionsPemicu from "../Components/Fragments/OptionsPemicu";
import IsiOptionsPemicu from "../Components/Fragments/IsiOptionsPemicu";

const Pemicu = () => {
    const [selectedOption, setSelectedOption] = useState('Vespa')
    const ref = useRef(null);

    useEffect(() => {
        setSelectedOption('Vespa')
    },[])

    const handleClickOption = (option) => {
        setSelectedOption(option)
    } 


    return (
        <div className="h-[75vh] mb-14 overflow-hidden lg:h-[130vh]">  
            <div>
                <img ref={ref} className="scale-[2]" src={Rumput} alt="" />
            </div>
            <div className="flex justify-center items-center relative">
                <div className="bg-[#F4F7F9] w-[100vw] h-[60vh] absolute top-7 rounded-t-lg flex justify-center items-center lg:h-[80vh] lg:top-20">
                    {selectedOption === "Vespa" && (
                        <IsiOptionsPemicu
                            judul="Pembakaran fosil (berkendaraa)"
                            isi="Penggunaan kendaraan pribadi untuk jarak yang dekat dapat meningkatkan emisi karbon karena pembakaran bahan bakar fosil."
                        />
                    )}

                    {selectedOption === "Colokan" && (
                        <IsiOptionsPemicu
                            judul="Pengunaan barang elektronik"
                            isi="secara  berlebihan memerlukan daya listrik untuk beroperasi, yang sering kali dihasilkan dari pembangkit listrik menggunakan bahan bakar fosil. transportasi elektronik dari tempat produksi ke konsumen juga berkontribusi pada emisi karbon."
                        />
                    )}

                    {selectedOption === "Pabrik" && (
                        <IsiOptionsPemicu
                            judul="Kegitan Industri"
                            isi="Proses produksi industri seperti produksi semen, baja, dan kimia menggunakan energi fosil dan menyebabkan emisi karbon."
                        />
                    )}

                    {selectedOption === "Akar" && (
                        <IsiOptionsPemicu
                            judul="Deforestasi (penggundulan hutan secara besar-besaran)"
                            isi=" yang di lakukan untuk pertanian, perkebunan, dan pembangunan infrastruktur melepaskan karbon yang disimpan dalam biomassa tumbuhan."
                        />
                    )}

                </div>
                <div className="w-[70vw] bg-hijau absolute -top-2 flex flex-col gap-1 items-center pt-3 rounded-t-lg lg:px-2 lg:-top-10 lg:w-[60vw] lg:gap-7 lg:pt-5">
                    <div className=" w-[70vw] text-center lg:text-2xl">
                        <h1 className="font-semibold">Pemicu Emisi Karbon</h1>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <OptionsPemicu 
                        gambar={Vespa} 
                        onClick={() => handleClickOption("Vespa")}
                        muncul={selectedOption === "Vespa" ? "border-4 border-b-[#017802] border-hijau scale-[1.03]" : ''}/>
                        <OptionsPemicu 
                        gambar={Colokan} 
                        onClick={() => handleClickOption("Colokan")}
                        muncul={selectedOption === "Colokan" ? "border-4 border-b-[#017802] border-hijau scale-[1.03]" : ''}/>
                        <OptionsPemicu 
                        gambar={Pabrik} 
                        onClick={() => handleClickOption("Pabrik")}
                        muncul={selectedOption === "Pabrik" ? "border-4 border-b-[#017802] border-hijau scale-[1.03]" : ''}/>
                        <OptionsPemicu 
                        gambar={Akar} 
                        onClick={() => handleClickOption("Akar")}
                        muncul={selectedOption === "Akar" ? "border-4 border-b-[#017802] border-hijau scale-[1.03]" : ''}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pemicu;
