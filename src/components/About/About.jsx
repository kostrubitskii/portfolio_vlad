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
        </div>

      </div>
      <p className={styles.secondText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since beginning my journey in UI/UX design, I have worked on a variety of projects. Each one has been a chance to learn something new and add a unique layer to my development as a designer, shaping the professional I am today.</p>
    </div>
  );
};