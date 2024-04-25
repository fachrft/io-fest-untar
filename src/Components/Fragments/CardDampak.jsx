const CardDampak = ({gambar, penjelasan, bg}) => {
    return (
        <div className="flex justify-center items-center lg:w-[354px]">
            <div className={`${bg} w-[259px] h-[310.92px] lg:w-[464px] lg:h-[437px] rounded-3xl flex flex-col gap-5 lg:gap-14 px-5 py-5 items-center lg:pt-10`} id="shadow">
                <div>
                    <img className="w-[78px] lg:w-[120px]" src={gambar} alt="" />
                </div>
                <div>
                    <p className="text-base text-center lg:text-xl">{penjelasan}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDampak;
