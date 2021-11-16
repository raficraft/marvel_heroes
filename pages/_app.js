import HeroesProvider from "../engine/context/characProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <HeroesProvider>
      <Component {...pageProps} />
    </HeroesProvider>
  );
}

export default MyApp;
