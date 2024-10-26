import styles from "./Footer.module.scss";
import Nav from "./Nav";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Nav isFooterNav={true} />
      <div className={`${styles.flexContainer} wrapper`}>
        <div className={styles.footerContent}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <p className={styles.p}>Copyright 2021. All Rights Reserved</p>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
