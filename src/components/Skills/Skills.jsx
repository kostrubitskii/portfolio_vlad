import styles from './skills.module.scss';

export default function Skills() {
  return (
    <div className={styles.skills}>
      <p className={styles.skillTitle}>SKILLS</p>

      <div className={styles.line}></div>

      <div className={styles.headers}>
        <p className={styles.heading}>LANGUAGES</p>
        <p className={styles.amount}>x3</p>
      </div>

      <div className={styles.blocks}>
        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Ukrainian</p>

        </div>

        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>English</p>

        </div>

        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Polish</p>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.headers}>
        <p className={styles.heading}>FEATURES</p>
        <p className={styles.amount}>x20</p>
      </div>

      <div className={styles.blocks}>
        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Design Thinking</p>
        </div>

        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Interviews</p>
        </div>

        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Heuristic Analysis</p>
        </div>

        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Competitor Analysis</p>
        </div>

        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Adaptive Design</p>
        </div>

        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Web Design</p>
        </div>
      </div>

      <p className={styles.count}>+14 more</p>

      <div className={styles.line}></div>

      <div className={styles.headers}>
        <p className={styles.heading}>PROJECTS</p>
        <p className={styles.amount}>x3</p>
      </div>

      <div className={styles.blocks}>
        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Book Appointment</p>
        </div>
        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Task Manager</p>
        </div>
      </div>

      <div className={styles.line}></div>
      <div className={styles.headers}>
        <p className={styles.heading}>TOOLS</p>
        <p className={styles.amount}>x3</p>
      </div>

      <div className={styles.blocks}>
        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Figma</p>
        </div>

        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Jira</p>
        </div>

        <div className={styles.borderBlocks}>
          <p className={styles.textBlocks}>Maze</p>
        </div>
      </div>

      <div className={styles.line}></div>
    </div>
  );
};