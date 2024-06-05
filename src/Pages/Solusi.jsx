import SwiperCardsSolusi from "../Components/Fragments/SwiperCardsSolusi";

const Solusi = () => {
    return (
        <div className="flex justify-center items-center flex-wrap gap-10 mb-14 lg:px-28 lg:justify-between lg:items-start lg:mb-20 overflow-hidden">
            <div data-aos="fade-right">
                <div className="px-8 flex flex-col gap-5 lg:w-[50vw]">
                    <h1 className="font-bold text-xl pr-20 lg:text-[40px] lg:leading-tight lg:w-[500px]">Solusi Pencegahan Emisi Karbon</h1>
                    <p className="text-paragraf lg:text-2xl">Dengan adanya emisi karbon di indonesia yang berdampak cukup signifikan, kami memberikan beberapa solusi untuk mencapai tujuan kami yaitu meminimalisir jejak karbon: langkah mudah gaya hidup berkelanjutan. Mari mulailah jejak perjalanan yang ramah lingkungan dengan berkontribusi yang baik</p>
                </div>
            </div>
            <SwiperCardsSolusi />
        </div>
    );
};

export default Solusi;
