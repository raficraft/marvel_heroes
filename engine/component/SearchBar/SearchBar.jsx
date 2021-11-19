import React, { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { debounce } from "./../../tools/utils";

export const SearchBar = () => {
  const searchRef = useRef(null);

  console.log("zob");

  const handleChange = debounce(() => {
    console.log("toto");
    const el = searchRef.current;

    console.log("value search", el.value);
  }, 300);

  return (
    <input
      className={styles.searchBar}
      type="search"
      placeholder="Search heroes"
      onChange={handleChange}
      ref={searchRef}
    />
  );
};
