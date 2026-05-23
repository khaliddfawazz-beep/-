import { BrowserRouter, Routes, Route } from "react-router-dom";
import OpportunityProvider from "./context/OpportunityContext";
import VolunteerProvider from "./context/VolunteerContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import Certificates from "./pages/Certificates";
import ManagerDashboard from "./pages/ManagerDashboard";
import Rankings from "./pages/Rankings";


function App() {
  return (
    <VolunteerProvider>
       <OpportunityProvider>
          <BrowserRouter>

             <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />
        
                <Route path="/opportunities" element={<Opportunities />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/manager" element={<ManagerDashboard />} />
                <Route path="/rankings" element={<Rankings />} />
            </Routes>

         </BrowserRouter>
      </OpportunityProvider>
    </VolunteerProvider>
  );
}

export default App;