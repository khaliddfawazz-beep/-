import { createContext, useState } from "react";

export const VolunteerContext = createContext();

export default function VolunteerProvider({ children }) {

  const [joinedOpportunities, setJoinedOpportunities] = useState([]);

  const [points, setPoints] = useState(3200);

  const [hours, setHours] = useState(150);

  return (
    <VolunteerContext.Provider
      value={{
        joinedOpportunities,
        setJoinedOpportunities,
        points,
        setPoints,
        hours,
        setHours
      }}
    >
      {children}
    </VolunteerContext.Provider>
  );
}