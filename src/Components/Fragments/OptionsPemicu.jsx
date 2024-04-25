const OptionsPemicu = ({gambar, onClick, muncul}) => {
    return (
        <div className={`w-[68px] flex justify-center items-center h-[62px] lg:w-full lg:h-full lg:pb-2 ${muncul} cursor-pointer`} onClick={onClick}>
            <img className="lg:w-[100px]" src={gambar} alt="" />
        </div>
    );
};

export default OptionsPemicu;
