import Head from "next/head";
import React, { useContext } from "react";
import Header from "../engine/component/Header/Header";
import styles from "../styles/Home.module.scss";
import Card from "./../engine/component/Card/Card";
import { HeroesContext } from "./../engine/context/characProvider";

export default function Home() {
  const { heroe, setHeroe } = useContext(HeroesContext);

  const lastIndex = heroe.all.length - 1;

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
    <>
      <Head>
        <title>Marvel Heroes</title>
        <meta
          name="description"
          content="Marvel Heroes generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${styles[heroe.current.heroesID]}`}>
        <Header />
        <h1 className={styles.title}>{heroe.current.heroes_name}</h1>
        <section className={styles.identity}>
          <div className={styles.temp}>
            <p className={styles.whiteText}>{heroe.current.desc}</p>
          </div>
          <Card />
        </section>
      </main>
      <span
        className={`${styles.button_container} ${styles.button_containerPrev}`}
      >
        <button
          className={`${styles.button} ${styles.buttonPrev}`}
          onClick={prevHeroes}
        >
          Prev
        </button>
      </span>

      <span
        className={`${styles.button_container} ${styles.button_containerNext}`}
      >
        <button
          className={`${styles.button} ${styles.buttonNext}`}
          onClick={nextHeroes}
        >
          Next
        </button>
      </span>
    </>
  );
}
