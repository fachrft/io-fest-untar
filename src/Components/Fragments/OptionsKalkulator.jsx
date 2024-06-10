import React from "react";

const OptionsKalkulator = ({image, onClick, bg, isi}) => {
    return (
        <div className={`px-3 py-2 flex justify-center gap-3 items-center flex-col lg:px-6 lg:py-3 ${bg}`} onClick={onClick}>
            <img className="lg:w-[80px] lg:h-[80px]" src={image} alt="" />
            <p className="text-white font-medium">{isi}</p>
        </div>
    );
};

export default OptionsKalkulator;
