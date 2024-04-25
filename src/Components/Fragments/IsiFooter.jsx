const IsiFooter = ({judul_isi, isi1, isi2, isi3, isi4, isi5}) => {
    return (
        <div className="flex flex-col ">
            <h1 className="text-[17px] font-bold lg:text-2xl">{judul_isi}</h1>
            <ul className="flex flex-col gap-1 text-[15px] pt-4  lg:text-2xl" >
                <li>
                    <a href="">{isi1}</a>
                </li>
                <li>
                    <a href="">{isi2}</a>
                </li>
                <li>
                    <a href="">{isi3}</a>
                </li>
                <li>
                    <a href="">{isi4}</a>
                </li>
                <li>
                    <a href="">{isi5}</a>
                </li>
            </ul>
        </div>
    );
};

export default IsiFooter;
