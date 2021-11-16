import React, { useState, useContext, useEffect } from "react";
import { HeroesContext } from "../../context/characProvider";

import styles from "./Card.module.scss";

export default function Card(data) {
  const { heroe, setHeroe } = useContext(HeroesContext);
  const lastIndex = heroe.all.length - 1;

  const [style, setStyle] = useState(styles);

  useEffect(() => {
    setStyle(styles);
  }, [heroe.current]);

  console.log(styles);

  const nextHeroes = () => {
    const nextID = heroe.all[heroe.current.id].id + 1;
    nextID > lastIndex ? (nextID = 0) : (nextID = nextID);

    setHeroe((s) => ({
      ...s,
      current: heroe.all[nextID],
    }));
  };

  const prevHeroes = () => {
    const nextID = heroe.all[heroe.current.id].id - 1;
    nextID < 0 ? (nextID = lastIndex) : (nextID = nextID);

    setHeroe((s) => ({
      ...s,
      current: heroe.all[nextID],
    }));
  };

  return (
    <div>
      <h1 className={style.title}>{heroe.current.heroes_name}</h1>
      <button onClick={prevHeroes}>Prev</button>
      <button onClick={nextHeroes}>Next</button>
    </div>
  );
}
