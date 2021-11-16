import React, { createContext, useState } from "react";
import { heroes } from "./../../pages/api/data";

export const HeroesContext = createContext();

export default function HeroesProvider({ children }) {
  //console.log("in context ", characters[0]);

  const [heroe, setHeroe] = useState({
    current: heroes[0],
    all: heroes,
  });

  return (
    <HeroesContext.Provider value={{ heroe, setHeroe }}>
      {children}
    </HeroesContext.Provider>
  );
}
