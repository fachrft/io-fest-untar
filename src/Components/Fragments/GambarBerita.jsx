const GambarBerita = ({image, text}) => {
    return (
        <div className="relative transition-transform duration-500 transform-gpu hover:scale-105">
            <img className="w-[150px] h-[161px] lg:w-[299px] lg:h-[290px]" src={image} alt="" />
            <p className="absolute bottom-4 px-3 text-white text-[14px] font-semibold lg:text-[22px]">{text}</p>
        </div>
    );
};

export default GambarBerita;
