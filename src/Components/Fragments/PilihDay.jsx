

const PilihDay = ({text, onClick, border}) => {
  return (
    <h1 className={`border-b-2 ${border} px-[17px] font-semibold py-2 lg:text-[32px] lg:px-[147px] lg:py-5 cursor-pointer`} onClick={onClick}>{text}</h1>
  )
}

export default PilihDay
