const isiOptionsPemicu = ({judul, isi}) => {
    return (
        <div className="flex justify-center items-center flex-col px-10 text-center gap-5 lg:gap-8">
            <h1 className="text-biru font-bold text-xl px-10 lg:text-3xl lg:w-[500px]">{judul}</h1>
            <div className="">
                <p className="text-[16px] px-5 lg:text-2xl lg:w-[600px]">{isi}</p>
            </div>
        </div>
    );
};

export default isiOptionsPemicu;
