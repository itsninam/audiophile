import { useEffect } from "react";
import styles from "./Header.module.scss";
import Button from "./Button";

function Header() {
  useEffect(() => {
    // console.log(window.innerHeight);
    // const header = document.querySelector("header");
    // header!.style.height = window.innerHeight + 90 + "px";
  }, []);

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <p>New Product</p>
        <p>XX99 Mark II Headphones</p>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button buttonClass="primary" buttonLabel="See products"></Button>
      </div>
    </header>
  );
}

export default Header;
