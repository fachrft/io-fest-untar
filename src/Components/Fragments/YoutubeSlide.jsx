import Play from "../../assets/vektor/play.svg";

const YoutubeSlide = ({ image }) => {
    return (
        <a href="">
            <div className="relative flex justify-center items-center">
                <img className="absolute z-10 lg:w-[60px]" src={Play} alt="" />
                <img className="w-[200px] h-[110px] lg:w-[280px] lg:h-[230px] shadow" src={image} alt="" />
            </div>
        </a>
    );
};

export default YoutubeSlide;
