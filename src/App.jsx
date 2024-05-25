import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Path/Index";
import PathKalkulator from "./Path/PathKalkulator";

const App = () => {
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
