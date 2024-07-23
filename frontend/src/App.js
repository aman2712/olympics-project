import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./screens/Home/Home";
import Auth from "./screens/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Schedule from "./screens/Schedule/Schedule";
import PlayerPortal from "./screens/PlayerPortal/PlayerPortal";
import GamesList from "./screens/GamesList/GamesList";
import GameDetails from "./screens/GameDetails/GameDetails";

import { AuthProvider } from "./context/AuthContext";
import { AppProvider } from "./context/AppContext";
import AdminDashboard from "./screens/AdminDashboard/AdminDashboard";

function App() {
  return (
    <main className="container">
      <AppProvider>
        <AuthProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/player-portal" element={<PlayerPortal />} />
              <Route path="/games-list" element={<GamesList />} />
              <Route path="/games/:id" element={<GameDetails />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      </AppProvider>
    </main>
  );
}
export default App;
