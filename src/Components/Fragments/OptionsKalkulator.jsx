import React from "react";

const OptionsKalkulator = ({image, onClick, bg}) => {
    return (
        <div className={`px-3 py-2 flex justify-center items-center lg:px-6 lg:py-4 ${bg}`} onClick={onClick}>
            <img className="lg:w-[80px] lg:h-[80px]" src={image} alt="" />
        </div>
    );
};

export default OptionsKalkulator;
