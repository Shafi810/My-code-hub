
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ThankYou from "./components/pages/ThankYou";
import HireMe from "./components/pages/HireMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/hire" element={<HireMe />} />
      </Routes>
    </Router>
  );
}

export default App;
