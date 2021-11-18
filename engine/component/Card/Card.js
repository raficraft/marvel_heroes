import React, { useState, useContext, useEffect } from "react";
import { HeroesContext } from "../../context/characProvider";
import Image from "next/image";

import styles from "./Card.module.scss";
import RadialChart, { LabelChart } from "../RadialChart/RadialChart";

export default function Card(data) {
  const { heroe, setHeroe } = useContext(HeroesContext);
  const lastIndex = heroe.all.length - 1;

  const [style, setStyle] = useState(styles);

  useEffect(() => {
    setStyle(styles);
  }, [heroe]);

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
    <div className={style.container} key={heroe.current.id}>
      <h1 className={style.title}>{heroe.current.heroes_name}</h1>

      <div className={style.bigImg}>
        <img
          src={`/assets/heroes/${heroe.current.heroesID}/big.png`}
          alt="Picture of the author"
        />
      </div>

      <button className={style.button} onClick={prevHeroes}>
        Prev
      </button>
      <button className={style.button} onClick={nextHeroes}>
        Next
      </button>

      <div className={style.radial}>
        <RadialChart
          score={heroe.current.durability}
          strokeStyle={`rgba(67,186,63,1)`}
          key={heroe.current.id + "_" + "durability"}
          label="durability"
          min={0}
          max={7}
          size={60}
          lineWidth={8}
          padding={5}
        >
          <LabelChart label="durability" />
        </RadialChart>
        <RadialChart
          score={heroe.current.energy}
          strokeStyle={`rgba(181,40,123,1)`}
          key={heroe.current.id + "_" + "energy"}
          label="energy"
          min={0}
          max={7}
          size={60}
          lineWidth={8}
          padding={5}
        >
          <LabelChart label="energy" />
        </RadialChart>
        <RadialChart
          score={heroe.current.fighting}
          strokeStyle={`rgba(23,149,214,1)`}
          key={heroe.current.id + "_" + "fighting"}
          label="fighting"
          min={0}
          max={7}
          size={60}
          lineWidth={8}
          padding={5}
        >
          <LabelChart label="fighting" />
        </RadialChart>
        <RadialChart
          score={heroe.current.intelligence}
          strokeStyle={`rgba(252,214,4,1)`}
          key={heroe.current.id + "_" + "intelligence"}
          label="intelligence"
          min={0}
          max={7}
          size={60}
          lineWidth={8}
          padding={5}
        >
          <LabelChart label="intelligence" />
        </RadialChart>
        <RadialChart
          score={heroe.current.speed}
          strokeStyle={`rgba(230,36,41,1)`}
          key={heroe.current.id + "_" + "speed"}
          label="speed"
          min={0}
          max={7}
          size={60}
          lineWidth={8}
          padding={5}
        >
          <LabelChart label="speed" />
        </RadialChart>
        <RadialChart
          score={heroe.current.strength}
          strokeStyle={`rgba(255,118,0,1)`}
          key={heroe.current.id + "_" + "strength"}
          label="strength"
          min={0}
          max={7}
          size={60}
          lineWidth={8}
          padding={5}
        >
          <LabelChart label="strenght" />
        </RadialChart>
      </div>
    </div>
  );
}
