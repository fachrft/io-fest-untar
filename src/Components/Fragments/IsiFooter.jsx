const IsiFooter = ({judul_isi, isi1, isi2, isi3, isi4, isi5, link1, link2, link3, link4, link5}) => {
    return (
        <div className="flex flex-col ">
            <h1 className="text-[17px] font-bold lg:text-2xl">{judul_isi}</h1>
            <ul className="flex flex-col gap-1 text-[15px] pt-4  lg:text-2xl" >
                <li>
                    <a href={link1}>{isi1}</a>
                </li>
                <li>
                    <a href={link2}>{isi2}</a>
                </li>
                <li>
                    <a href={link3}>{isi3}</a>
                </li>
                <li>
                    <a href={link4}>{isi4}</a>
                </li>
                <li>
                    <a href={link5}>{isi5}</a>
                </li>
            </ul>
        </div>
    );
};

export default IsiFooter;
