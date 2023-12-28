import "./App.css";
import Landing from "./pages/Landing";
import TheDayBefore from "./pages/TheDayBefore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/thedaybefore" element={<TheDayBefore />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
