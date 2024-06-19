import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.lines}></div>
          <p className={styles.text}>MENU</p>
          <div className={styles.lines}></div>
        </div>
      </div>
    </header>
  );
};
