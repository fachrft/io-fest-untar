import Logo from "../assets/logo/logo.png";
import IsiFooter from "../Components/Fragments/IsiFooter";
import InputFooter from "../Components/Elements/InputFooter";
import Instagram from "../assets/logo/Instagram.svg";
import Email from "../assets/logo/email.svg";

const Footer = () => {
    return (
        <footer>
            <div className="bg-biru text-white lg:px-28">
                <div className="px-3 lg:px-0">
                    <img className="w-44 lg:w-64" src={Logo} alt="" />
                </div>
                <div className="px-7 mb-10 lg:w-[40vw] lg:mb-16">
                    <h1 className="lg:text-2xl">Jl. Balai Pustaka Baru I No.2, RT.2/RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220</h1>
                </div>
                <div className="flex px-6 gap-2.5 mb-7 lg:justify-between lg:mb-20">
                    <IsiFooter judul_isi="LAMAN SITUS" isi1="Beranda" isi2="Berita" isi3="Data" isi4="Edukasi" isi5="Kalkulator" />
                    <span className="bg-white w-[0.8px]"></span>
                    <IsiFooter judul_isi="SUMBER DATA" />
                    <span className="bg-white w-[0.8px]"></span>
                    <IsiFooter judul_isi="CREDIT" isi1="Freepik" />
                </div>
                <div className="px-6 mb-2 flex flex-col lg:gap-2">
                    <h1 className="text-[17px] font-bold lg:text-2xl">RESPONDEN</h1>
                    <p className="text-[14px] lg:text-2xl">kami Mengharapkan masukan terhadap user</p>
                </div>
                <div className="px-6 flex flex-col gap-2 mb-7 relative lg:mb-20">
                    <InputFooter pb="lg:pb-5 lg:pt-5" placeholder="Masukkan Email" />
                    <InputFooter pb="pb-28 lg:pb-56" pt="pt-5" placeholder="Tuliskan Masukkan Untuk Web Ini" />
                    <button className="absolute font-semibold right-10 bottom-4 bg-hijau px-6 py-2 rounded-lg">KIRIM</button>
                </div>
                <div className="flex justify-center items-center gap-4 pb-10">
                    <img src={Instagram} alt="" />
                    <img src={Email} alt="" />
                </div>
            </div>
            <div className="bg-[#57AE09] h-20 flex justify-center items-center">
                <h1 className="text-xl font-semibold text-white">Copyright 2024 TEAM</h1>
            </div>
        </footer>
    );
};

export default Footer;
