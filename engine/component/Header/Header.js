import Head from "next/head";
import Image from "next/image";
import styles from "./Header.module.scss";
import { characters } from "../../../pages/api/data";
import { SearchBar } from "./../SearchBar/SearchBar";

export default function Header() {
  return (
    <header className={styles.header_top}>
      <h1>
        <span className={styles.marvelText}>Marvel</span> Heroes
      </h1>
      <SearchBar />
    </header>
  );
}
