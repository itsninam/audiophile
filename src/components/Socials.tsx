import styles from "./Footer.module.scss";
import Button from "./buttons/Button";

function Socials() {
  return (
    <ul className={styles.footerSocials}>
      <li>
        <Button buttonClass="btn icon">
          <img
            src="/starter-code/assets/shared/desktop/icon-facebook.svg"
            alt="facebook"
          />
        </Button>
      </li>
      <li>
        <Button buttonClass="btn icon">
          <img
            src="/starter-code/assets/shared/desktop/icon-twitter.svg"
            alt="twitter"
          />
        </Button>
      </li>
      <li>
        <Button buttonClass="btn icon">
          <img
            src="/starter-code/assets/shared/desktop/icon-instagram.svg"
            alt="instagram"
          />
        </Button>
      </li>
    </ul>
  );
}

export default Socials;
