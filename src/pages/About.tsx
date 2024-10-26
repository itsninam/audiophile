import styles from "./About.module.scss";
function About() {
  return (
    <section className={`${styles.aboutContainer} wrapper`}>
      <div className={styles.infoContainer}>
        <h4 className={styles.heading}>
          Bringing you the <span>best</span> audio gear
        </h4>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src="starter-code/assets/shared/desktop/image-best-gear.jpg"
        alt="Man standing against patterned wall and wearing headphones, looking into the distance"
      />
    </section>
  );
}

export default About;
