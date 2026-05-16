// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/public/AuthLayout";
import HeroSection from "../modules/public//sections/HeroSection";
import Login from "../modules/auth/Login";
import Register from "../modules/auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Home */}
        <Route path="/" element={<HeroSection />} />

        {/* Auth pages wrapped in AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Optional: 404 */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
