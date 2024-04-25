import Handphone from '../assets/vektor/handphone.png'


const VisualisasiKalkulator = () => {
  return (
    <div className='mb-14 lg:px-28'>
      <div className="px-7 mb-10">
        <h1 className="font-semibold text-2xl pr-20 lg:text-[40px] lg:leading-tight">Kalkulator Emisi Karbon</h1>
      </div>
      <div className='flex justify-center items-center'>
        <img className='w-80' src={Handphone} alt="" />
      </div>
    </div>
  )
}

export default VisualisasiKalkulator
