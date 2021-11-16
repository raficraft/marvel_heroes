import Head from "next/head";
import Image from "next/image";
import styles from "./Header.module.scss";
import { characters } from "../../../pages/api/data";

export default function Header() {
  return (
    <header className={styles.header_top}>
      <h1>
        <span className={styles.textRed}>Marvel</span> Heroes
      </h1>
      <input type="search" placeholder="search heroes" />
    </header>
  );
}
