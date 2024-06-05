import Globe from "../Components/Fragments/Globe";
import Icon from "../assets/icon/Icon.svg";

const Home = () => {
    return (
        <div className="flex flex-col gap-10 mb-14" id="home">
            <Globe />
            <div className="flex flex-col px-7 gap-4 lg:px-32">
                <h1 className="text-xl font-semibold pr-10 lg:text-[40px] lg:leading-tight lg:w-[50vw]">Apa Yang Di Maksud Dengan Emisi Karbon ?</h1>
                <p className="text-[#8B8B8B] lg:text-2xl lg:w-[50vw]">
                    karbon adalah gas yang keluar dari kendaraan dan pabrik, membuat bumi kita semakin panas. Ini seperti selimut tebal yang membuat bumi 'demam'. Kurangi emisi ini supaya bumi kita sejuk dan nyaman untuk semua makhluk hidup.
                </p>
                <div className="flex gap-2 items-center lg:gap-6">
                    <div className="bg-biru w-8 flex justify-center items-center h-8 rounded-full lg:w-16 lg:h-16">
                        <img className="w-3 lg:w-4" src={Icon} alt="" />
                    </div>
                    <div>
                        <h1 className="text-biru font-semibold text-xl lg:text-3xl">Lihat berita terkini</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
