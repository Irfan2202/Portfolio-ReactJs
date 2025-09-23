import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Irfan</h1>
        <p className={styles.description}>
          I'm a Web Developer Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Est harum doloremque blanditiis, accusamus officia ad quaerat ea
          accusantium expedita repudiandae!
        </p>
        <div className={styles.links}>
          <a className={styles.button} href="#projects">
            My projects
          </a>
          <a className={styles.button} href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <img
          src="/myphoto.webp"
          alt="Irfan"
          loading="lazy"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}

export default Hero;
