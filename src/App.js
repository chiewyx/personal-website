import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import HawkerTownPage from "./pages/projects/hawkertown";
import AlexPage from "./pages/projects/alex";
import UpcyclePage from "./pages/projects/upcycle";
import ReviewLahPage from "./pages/projects/reviewlah";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hawkertown" element={<HawkerTownPage />} />
        <Route path="/alex" element={<AlexPage />} />
        <Route path="/upcycle" element={<UpcyclePage />} />
        <Route path="/reviewlah" element={<ReviewLahPage />} />
      </Routes>
    </div>
  );
}

export default App;
