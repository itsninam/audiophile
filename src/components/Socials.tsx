import styles from "./Footer.module.scss";

function Socials() {
  return (
    <ul className={styles.footerSocials}>
      <li>
        <button>
          <img
            src="starter-code/assets/shared/desktop/icon-facebook.svg"
            alt="facebook"
          />
        </button>
      </li>
      <li>
        <button>
          <img
            src="starter-code/assets/shared/desktop/icon-twitter.svg"
            alt="facebook"
          />
        </button>
      </li>
      <li>
        <button>
          <img
            src="starter-code/assets/shared/desktop/icon-instagram.svg"
            alt="facebook"
          />
        </button>
      </li>
    </ul>
  );
}

export default Socials;
