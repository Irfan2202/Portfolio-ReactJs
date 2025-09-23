import skills from "../../data/skills.json"; // path ke JSON
import styles from "./Experience.module.css";

function Skills() {
  return (
    <section className={styles.container}>
      {skills.map((skill) => (
        <div key={skill.id} className={styles.skillCard}>
          <img src={skill.icon} alt={skill.name} className={styles.icon} />
          <span className={styles.name}>{skill.name}</span>
        </div>
      ))}
    </section>
  );
}

export default Skills;
