import Navbar from "../Components/Fragments/Navbar"
import Kalkulator from '../Pages/Kalkulator'
import Footer from "../Pages/Footer"
import Gordeng from "../Pages/Gordeng"


const PathKalkulator = () => {
  return (
    <div>
      <Gordeng />
      <Navbar/>
      <Kalkulator/>
      <Footer/>
    </div>
  )
}

export default PathKalkulator
