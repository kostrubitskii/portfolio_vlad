import MenuClose from '@/ui/CloseMenu';
import styles from './menu.module.scss';
import ArrowIconRight from '@/ui/ArrowIconRight';
import DarkCopy from '@/ui/DarkCopy';
import Link from 'next/link';

export default function Menu({ toggleMenu }) {

  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <header className={styles.top} onClick={toggleMenu}>
          <MenuClose className={styles.lines} />
          <p className={styles.close}>CLOSE</p>
          <MenuClose className={styles.lines} />
        </header>
      </div>

      <div className={styles.wrapper}>
        <div>
          <Link className={styles.hover} href={'/'}>
            <div className={styles.section}>
              <div className={styles.topBar}>
                <p className={styles.number}>01</p>
                <div className={styles.container} >
                  <h1 className={styles.name}>ABOUT.</h1>
                  <p className={styles.hidden}>INFORMATTION ABOUT DESIGNER</p>
                  <div className={styles.arrow}>
                    <ArrowIconRight height={40} width={40} />
                  </div>
                </div>
              </div>
              <p className={styles.text}>INFORMATTION ABOUT DESIGNER</p>
            </div>
          </Link>

          <Link className={styles.hover} href={'/portfolio'}>
            <div className={styles.section}>
              <div className={styles.topBar}>
                <p className={styles.number}>02</p>
                <div className={styles.container} >
                  <h1 className={styles.name}>PORTFOLIO.</h1>
                  <p className={styles.hidden}>EXPLORE WORKS</p>
                  <div className={styles.arrow}>
                    <ArrowIconRight height={40} width={40} />
                  </div>
                </div>
              </div>
              <p className={styles.text}>EXPLORE WORKS</p>
            </div>
          </Link>

          <Link className={styles.hover} href={'/contacts'}>
            <div className={styles.section}>
              <div className={styles.topBar}>
                <p className={styles.number}>03</p>
                <div className={styles.container} >
                  <h1 className={styles.name}>CONTACTS.</h1>
                  <p className={styles.hidden}>CONTACTS FOR OUR COLLABORATION</p>
                  <div className={styles.arrow}>
                    <ArrowIconRight height={40} width={40} />
                  </div>
                </div>
              </div>
              <p className={styles.text}>CONTACTS FOR OUR COLLABORATION</p>
            </div>
          </Link>
        </div>

        <div className={styles.footer}>
          <div className={styles.bottom}>
            <DarkCopy />
            <p className={styles.year}>2024</p>
          </div>
          <p className={styles.bottomText}>A NEW STORY IS JUST A CANVAS OF PIXELS</p>
        </div>
      </div >
    </div >
  );
};