import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Path/Index";
import PathKalkulator from "./Path/PathKalkulator";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        })
      }, [])
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/kalkulator" element={<PathKalkulator />} />
            </Routes>
        </Router>
    );
};

export default App;
