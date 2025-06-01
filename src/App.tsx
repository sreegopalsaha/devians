import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/page";
import JoinDevians from "./pages/join-page/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<JoinDevians />} />
      </Routes>
    </Router>
  );
}

export default App;