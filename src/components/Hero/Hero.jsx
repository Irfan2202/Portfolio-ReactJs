import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Irfan</h1>
        <p className={styles.description}>I'm a Web Developer</p>
        <div className={styles.links}>
          <a className={styles.button} href="#projects">
            Check out my projects
          </a>
          <a className={styles.button} href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <div>
        <img src="" alt="irfan image" />
      </div>
    </section>
  );
}

export default Hero;
