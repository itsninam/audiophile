import styles from "./Footer.module.scss";
import Socials from "./Socials";
import Logo from "./navigation/Logo";
import NavList from "./navigation/NavList";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.flexContainer} wrapper`}>
        <Logo />
        <NavList isFooterNav={true} />
        <p className={styles.footerContent}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
