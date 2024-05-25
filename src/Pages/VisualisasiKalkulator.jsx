import Handphone from "../assets/vektor/handphone.png";
import FiturKalkulatorEmisi from "../Components/Fragments/FiturKalkulatorEmisi";
import Icon from '../assets/icon/Icon.svg'

const VisualisasiKalkulator = () => {
    return (
        <div className="mb-14 lg:px-28">
            <div className="px-7 mb-10">
                <h1 className="font-semibold text-2xl pr-20 lg:text-[40px] lg:leading-tight">Kalkulator Emisi Karbon</h1>
            </div>
            <div className="relative">
                <div className="flex justify-center items-center">
                    <img className="w-80 lg:w-96" src={Handphone} alt="" />
                </div>
                <div className="absolute top-14 left-7 flex flex-col gap-3 lg:left-[420px]">
                    <FiturKalkulatorEmisi text="Desain Ramah Pengguna" />
                    <FiturKalkulatorEmisi text="Aksesibilitas Tinggi" />
                    <FiturKalkulatorEmisi text="Penyesuaian Personal" />
                    <FiturKalkulatorEmisi text="Pelacakan kemajuan" />
                    <FiturKalkulatorEmisi text="Feedback Instan" />
                    <FiturKalkulatorEmisi text="Integrasi Sosial" />
                </div>
            </div>
            <div className="flex gap-2 items-center lg:gap-6 px-10">
                <div className="bg-biru w-8 flex justify-center items-center h-8 rounded-full lg:w-16 lg:h-16">
                    <img className="w-3 lg:w-4" src={Icon} alt="" />
                </div>
                <div>
                    <h1 className="text-biru font-semibold text-xl lg:text-3xl">Ayo Hitung Emisimu!</h1>
                </div>
            </div>
        </div>
    );
};

export default VisualisasiKalkulator;
