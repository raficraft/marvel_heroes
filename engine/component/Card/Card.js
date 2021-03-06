import React, { useContext, useEffect } from "react";
import { HeroesContext } from "../../context/characProvider";
import Image from "next/image";

import styles from "./Card.module.scss";
import RadialChart, { LabelChart } from "../RadialChart/RadialChart";

export default function Card(data) {
  const { heroe, setHeroe } = useContext(HeroesContext);

  console.log("render CARD");

  return (
    <div className={styles.container} key={heroe.current.id}>
      <div className={styles.bigImg}>
        <Image
          src={`/assets/heroes/${heroe.current.heroesID}/big.png`}
          alt="Picture of the author"
          objectFit="contain"
          width={heroe.current.imageSize.big.x}
          height={heroe.current.imageSize.big.y}
        />
      </div>

      <div className={styles.radial}>
        <RadialChart
          score={heroe.current.durability}
          strokeStyle={`rgba(67,186,63,1)`}
          key={heroe.current.id + "_" + "durability"}
          label="durability"
          min={0}
          max={7}
          size={100}
          lineWidth={12}
          padding={9}
          animationInterval={1}
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
          size={100}
          lineWidth={12}
          padding={9}
          animationInterval={2}
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
          size={100}
          lineWidth={12}
          padding={9}
          animationInterval={3}
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
          size={100}
          lineWidth={12}
          padding={9}
          animationInterval={4}
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
          size={100}
          lineWidth={12}
          padding={9}
          animationInterval={5}
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
          size={100}
          lineWidth={12}
          padding={9}
          animationInterval={6}
        >
          <LabelChart label="strenght" />
        </RadialChart>
      </div>
    </div>
  );
}
