import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./screens/Home/Home";
import Auth from "./screens/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Schedule from "./screens/Schedule/Schedule";
import PlayerPortal from "./screens/PlayerPortal/PlayerPortal";
import GamesList from "./screens/GamesList/GamesList";

function App() {
  return (
    <main className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/player-portal" element={<PlayerPortal />} />
          <Route path="/games-list" element={<GamesList />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
export default App;
