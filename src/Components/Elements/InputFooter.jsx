const InputFooter = ({pb, pt, placeholder}) => {
  return (
    <input 
    type="text" 
    className={`w-full px-6 py-2 placeholder:text-[#D9D9D9] text-black rounded-sm ${pb} ${pt}`} placeholder={placeholder} />
  )
}

export default InputFooter
