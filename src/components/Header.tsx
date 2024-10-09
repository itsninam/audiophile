import { useEffect } from "react";
import styles from "./Header.module.scss";

function Header() {
  useEffect(() => {
    // console.log(window.innerHeight);
    // const header = document.querySelector("header");
    // header!.style.height = window.innerHeight + 90 + "px";
  }, []);

  return (
    <header className={styles.header}>
      <div className="wrapper">hello</div>
    </header>
  );
}

export default Header;
