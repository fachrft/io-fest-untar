const ButtonGrafik = ({opacity, text, onClick}) => {
  return (
    <button className={`text-[#27B869] font-bold border-2 border-[#27B869] px-3 py-2 rounded-lg ${opacity} lg:text-xl lg:px-5 lg:py-3`} onClick={onClick}>{text}</button>
  )
}

export default ButtonGrafik
