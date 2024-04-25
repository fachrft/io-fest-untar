import Bus from "../assets/icon/bus.svg";
import Motor from "../assets/icon/motor.svg";
import Mobil from "../assets/icon/mobil.svg";
import Pom from "../assets/icon/pom.svg";
import Listrik from "../assets/icon/listrik.svg";
import Solar from "../assets/icon/solar.svg";
import OptionsKalkulator from "../Components/Fragments/OptionsKalkulator";
import { useState } from "react";

const Kalkulator = () => {
    const [tipeKendaraan, setTipeKendaraan] = useState('')
    const [bahanBakar, setBahanBakar] = useState('')
    const [jarak, setJarak] = useState('')
    const [totalEmisi, setTotalEmisi] = useState('')

    const handleJarakChange = (e) => {
        const newValue = e.target.value.replace(",", ".");
        setJarak(newValue);
    };

    const pickTipeKendaraan = (type) => {
        setTipeKendaraan(type)
    }

    const pickBahanBakar = (type) => {
        setBahanBakar(type)
    }

    const kalkulasi = (input, konsumsiPerLiter, emisi) => {
        let konsumsi = 0
        let liter = 0
        let totalEmisi = 0
        konsumsi = parseFloat(input) * konsumsiPerLiter
        liter = konsumsi * emisi
        totalEmisi = konsumsiPerLiter * liter
        setTotalEmisi(totalEmisi.toFixed(3) + " kg C02/km")
    }

    const SubmitKalkulasi = () => {
        if(tipeKendaraan === "Mobil") {
            if(bahanBakar === "Bensin") {
                kalkulasi(jarak, 0.051, 2.65)   
            } 
            if(bahanBakar === "Solar") {
                kalkulasi(jarak, 0.0405, 2.4) 
            }
            if(bahanBakar === 'Listrik') {
                kalkulasi(jarak, 0.1176, 1.07)
            }
        } 
        if(tipeKendaraan === 'Motor') {
            if(bahanBakar === 'Bensin') {
                kalkulasi(jarak, 0.0192, 2.4)
            }
            if(bahanBakar === 'Listrik') {
                kalkulasi(jarak, 0.025, 0.85)
            }
        }
        if(tipeKendaraan === "Bus") {
            if(bahanBakar === "Solar") {
                kalkulasi(jarak, 0.333, 2.4)
            }
            if(bahanBakar === "Listrik") {
                kalkulasi(jarak, 1, 1.07)
            }
        }
    }


    return (
        <div className="pt-24 mb-20 lg:px-28 lg:mb-20">
            <div className="text-center mb-5 lg:mb-10">
                <h1 className="text-[#57AE09] font-semibold text-xl lg:text-2xl">Ayo Hitung Emisimu !</h1>
            </div>
            <div className="flex justify-center items-center ">
                <div className="bg-hijau w-[85vw] h-[50vh] flex flex-col items-center justify-around rounded-xl lg:py-6 lg:h-[60vh] lg:w-[60vw]">
                    <div className="bg-[#57AE09] px-6 py-2 rounded-full">
                        <h1 className="text-white font-semibold lg:text-xl">Jenis Kendaraan</h1>
                    </div>
                    <div className="bg-white w-[75vw] flex gap-3 justify-center px-4 py-4 rounded-lg lg:w-[45vw] lg:gap-7">
                        <OptionsKalkulator 
                        image={Bus} 
                        onClick={() => pickTipeKendaraan("Bus")} 
                        bg={tipeKendaraan === 'Bus' ? "bg-[#57AE09]" : 'bg-hijau'}
                        />
                        <OptionsKalkulator 
                        image={Motor} 
                        onClick={() => pickTipeKendaraan("Motor")} 
                        bg={tipeKendaraan === 'Motor' ? "bg-[#57AE09]" : 'bg-hijau'}
                        />
                        <OptionsKalkulator 
                        image={Mobil} 
                        onClick={() => pickTipeKendaraan("Mobil")} 
                        bg={tipeKendaraan === 'Mobil' ? "bg-[#57AE09]" : 'bg-hijau'}
                        />
                    </div>
                    <div>
                        <input 
                         type="text"
                         className="bg-transparent border-4 border-white rounded-xl px-2 py-2 contrast-more:border-slate-400 lg:px-4" 
                         value={jarak}  
                         onChange={handleJarakChange}  
                         />
                        <p className="text-center mt-2 text-white">Jarak Tempuh (km)</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center pt-10">
                <div className="border-2 rounded-full py-2 border-[#57AE09] text-center w-[85vw] lg:w-[60vw]">
                    <h1 className="text-[#57AE09] font-semibold">Jenis Bahan Bakar</h1>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center gap-5 pt-10">
                    <OptionsKalkulator 
                    image={Pom}
                    onClick={() => pickBahanBakar('Bensin')}
                    bg={bahanBakar === 'Bensin' ? "bg-[#57AE09]" : 'bg-hijau'}
                    />
                    <OptionsKalkulator 
                    image={Listrik} 
                    onClick={() => pickBahanBakar('Listrik')}
                    bg={bahanBakar === 'Listrik' ? "bg-[#57AE09]" : 'bg-hijau'}
                    />
                    <OptionsKalkulator 
                    image={Solar} 
                    onClick={() => pickBahanBakar('Solar')}
                    bg={bahanBakar === 'Solar' ? "bg-[#57AE09]" : 'bg-hijau'}
                    />
                </div>
            </div>
            <div className="flex justify-center pt-10">
                <button className="bg-[#57AE09] px-14 py-2 rounded-2xl text-xl text-white font-semibold lg:text-2xl" onClick={SubmitKalkulasi}>Hitung</button>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col px-7 gap-3 lg:w-[60vw]">
                    <label htmlFor="" className="text-biru lg:text-2xl">
                        Total :
                    </label>
                    <div className="flex justify-center">
                        <input readOnly type="text" value={totalEmisi} className="bg-transparent border-2 border-biru w-[85vw] px-5 py-2 lg:py-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kalkulator;
