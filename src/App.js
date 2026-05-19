import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import Certificates from "./pages/Certificates";
import ManagerDashboard from "./pages/ManagerDashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/manager" element={<ManagerDashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;