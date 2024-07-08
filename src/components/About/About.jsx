import Skills from '../Skills/Skills';
import styles from './about.module.scss';

export default function About() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.borderContainer}>
            <div className={styles.border}></div>
            <p className={styles.year}>2024</p>
          </div>
          <p className={styles.about}>About</p>
        </div>

        <div className={styles.container}>
          <p className={styles.text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passionate about creating user centric designs based on research and interviews. I have skills in leading  teams as a Scrum Master and excel in organizing projects and collaborating.</p>
          
          <Skills />
        </div>

      </div>
      <p className={styles.secondText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since beginning my journey in UI/UX design, I have worked on a variety of projects. Each one has been a chance to learn something new and add a unique layer to my development as a designer, shaping the professional I am today.</p>
    </div>
  );
};