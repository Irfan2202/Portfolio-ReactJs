import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
      <h2>About</h2>
      <div className={styles.container}>
        <div className={styles.skillsBox}>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>
              <div>
                <h1>Web Developer</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  quam quas ex maiores non ipsa necessitatibus dolorem at
                  incidunt voluptas?
                </p>
              </div>
            </li>
            <li className={styles.skillItem}>
              <div>
                <h1>UI/UX Design</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  quam quas ex maiores non ipsa necessitatibus dolorem at
                  incidunt voluptas?
                </p>
              </div>
            </li>
            <li className={styles.skillItem}>
              <div>
                <h1>Mobile Developer</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  quam quas ex maiores non ipsa necessitatibus dolorem at
                  incidunt voluptas?
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.aboutImageContainer}>
          <img
            src="/your-about-photo.webp" // Ganti dengan path foto Anda
            alt="About me"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
