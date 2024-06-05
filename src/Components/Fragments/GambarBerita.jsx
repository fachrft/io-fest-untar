const GambarBerita = ({ link, image, text }) => {
    return (
        <div className="relative transition-transform duration-500 transform-gpu hover:scale-105 shadow">
            <a href={link}>
                <img className="w-[150px] h-[161px] lg:w-[299px] lg:h-[290px]" src={image} alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-50"></div>
                <p className="absolute bottom-4 px-3 text-white text-[14px] font-semibold lg:text-[22px]">{text}</p>
            </a>
        </div>
    );
};

export default GambarBerita;
