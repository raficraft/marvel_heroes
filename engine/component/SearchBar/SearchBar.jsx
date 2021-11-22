import React, { forwardRef, useContext, useState, useRef } from "react";
import styles from "./SearchBar.module.scss";
import { debounce } from "./../../tools/utils";
import { HeroesContext } from "./../../context/characProvider";
import { useClickOutside } from "./../../hooks/useClickoutside";

export const SearchBar = () => {
  const { heroe, setHeroe } = useContext(HeroesContext);
  const containerSearchRef = useRef();
  const inputRef = useRef();
  const [ifSearchRes, setIfSearchRes] = useState(false);
  const [searchRes, setSearchRes] = useState([]);
  const [searchAction, setSearchAction] = useState(false);

  const emptyInput = () => {
    inputRef.current.value = "";
  };

  const { visible, setVisible } = useClickOutside(
    false,
    containerSearchRef,
    emptyInput
  );

  const handleChange = (event) => {
    const el = event.target;
    const res = heroe.all.filter((item) => item.heroes_name.includes(el.value));

    if (el.value.length >= 3) {
      if (res.length) {
        setIfSearchRes(true);
        setSearchRes(res);
        setSearchAction(true);
        setVisible(true);
      } else {
        setVisible(true);
        setSearchAction(true);
        setIfSearchRes(false);
      }
    } else if (el.value < 3) {
      setVisible(false);
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

    emptyInput();
    setVisible(false);
    setIfSearchRes(false);
    setSearchAction(false);
  };

  return (
    <div className={styles.searchContainer} ref={containerSearchRef}>
      <input
        className={styles.searchBar}
        type="search"
        placeholder="Search heroes"
        onChange={handleChange}
        ref={inputRef}
      />
      {visible && ifSearchRes && searchAction === true && (
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
      {visible && !ifSearchRes && searchAction === true && (
        <p className={styles.searchRes}>{`Don't result match`}</p>
      )}
    </div>
  );
};
