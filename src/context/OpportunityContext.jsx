import { createContext, useState } from "react";

export const OpportunityContext = createContext();

export default function OpportunityProvider({ children }) {

  const [opportunities, setOpportunities] = useState([
    {
      title: "حملة تنظيف الحدائق",
      city: "دمشق",
      hours: 10,
      category: "بيئي"
    },
    {
      title: "تعليم الأطفال",
      city: "حلب",
      hours: 20,
      category: "تعليمي"
    }
  ]);

  return (
    <OpportunityContext.Provider
      value={{
        opportunities,
        setOpportunities
      }}
    >
      {children}
    </OpportunityContext.Provider>
  );
}