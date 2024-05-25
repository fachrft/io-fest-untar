import Navbar from "../Components/Fragments/Navbar";
import Home from "../Pages/Home";
import Berita from "../Pages/Berita";
import Visualisasi from "../Pages/Visualisasi";
import Pemicu from "../Pages/Pemicu";
import Dampak from "../Pages/Dampak";
import Solusi from "../Pages/Solusi";
import VisualisasiKalkulator from "../Pages/VisualisasiKalkulator";
import Footer from "../Pages/Footer";
import Gordeng from "../Pages/Gordeng";

const Index = () => {
    return (
        <div>
            <Gordeng />
            <Navbar />
            <Home />
            <Berita />
            <Visualisasi />
            <Pemicu />
            <Dampak />
            <Solusi />
            <VisualisasiKalkulator />
            <Footer />
        </div>
    );
};

export default Index;
