import React, { useContext, useState } from "react";
import styles from "./SearchBar.module.scss";
import { debounce } from "./../../tools/utils";
import { HeroesContext } from "./../../context/characProvider";

export const SearchBar = () => {
  const { heroe, setHeroe } = useContext(HeroesContext);
  const [ifSearchRes, setIfSearchRes] = useState(false);
  const [searchRes, setSearchRes] = useState([]);
  const [searchAction, setSearchAction] = useState(false);

  const handleChange = (event) => {
    console.log(event);
    const el = event.target;
    const res = heroe.all.filter((item) => item.heroes_name.includes(el.value));
    console.log(res);

    if (el.value.length >= 3) {
      if (res.length) {
        setIfSearchRes(true);
        setSearchRes(res);
        setSearchAction(true);
      } else {
        setSearchAction(true);
        setIfSearchRes(false);
      }
    }

    if (el.value === "") {
      setIfSearchRes(false);
      setSearchAction(false);
    }
  };

  console.log("render SEARCH BAR");

  const getHeroes = (key) => {
    setHeroe((s) => ({
      ...s,
      current: key,
    }));

    setIfSearchRes(false);
    setSearchAction(false);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchBar}
        type="search"
        placeholder="Search heroes"
        onChange={handleChange}
      />
      {ifSearchRes && searchAction === true && (
        <ul className={styles.searchRes}>
          {searchRes.map((item, key) => {
            return (
              <li
                key={key}
                onClick={(e) => {
                  getHeroes(heroe.all[item.id]);
                }}
              >
                {item.heroes_name}
              </li>
            );
          })}
        </ul>
      )}
      {!ifSearchRes && searchAction === true && <p>{`Don't result match`}</p>}
    </div>
  );
};
