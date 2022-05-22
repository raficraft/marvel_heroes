import React, { createContext, useState, useEffect } from "react";
import useGetimages from "../hooks/useGetImages";
import { heroes } from "./../../pages/api/data";

export const HeroesContext = createContext();

export default function HeroesProvider({ children }) {
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
