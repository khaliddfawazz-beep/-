import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import OpportunityProvider from "./context/OpportunityContext";
import VolunteerProvider from "./context/VolunteerContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <VolunteerProvider>
        <OpportunityProvider>
           <App />
         </OpportunityProvider>
     </VolunteerProvider>
    
  </React.StrictMode>,
)