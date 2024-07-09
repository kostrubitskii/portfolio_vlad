import Link from 'next/link';
import styles from './footer.module.scss';
import Copy from '@/ui/Copy';
import ArrowIconRight from '@/ui/ArrowIconRight';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.wrapper}>
        <div className={styles.headers}>
          <p className={styles.text}>Let’s connect to create something interesting</p>
          <p className={styles.heading}>Say Hello</p>
        </div>

        <div className={styles.info}>
          <div className={styles.contacts}>
            <div className={styles.contactsBlock}>
              <p className={styles.type}>E-mail:</p>
              <p className={styles.address}>ivanchukvladislav1@gmail.com</p>
            </div>
            <div className={styles.contactsBlock}>
              <p className={styles.type}>Phone number:</p>
              <p className={styles.number}>+38 [097] 414 67 63</p>
            </div>

          </div>
          <div className={styles.links}>
            <div className={styles.linksBlock}>
              <Link href='https://www.linkedin.com/in/ivanchukv' className={styles.link}>Linkedin</Link>
              <div className={styles.arrow}>
                <ArrowIconRight width={16} height={16} color='#FFFFFF' />
              </div>
            </div>
            <div className={styles.linksBlock}>
              <Link href='https://www.behance.net/5facac47' className={styles.link}>Behance</Link>
              <div className={styles.arrow}>
                <ArrowIconRight width={16} height={16} color='#FFFFFF' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lastLine}></div>

      <div className={styles.lastBlock}>
        <p className={styles.country}>Ukraine</p>
        <div className={styles.box}>
          <Copy classNames={styles.copy}/>
          <p className={styles.year}>2024</p>
        </div>
      </div>
    </div>
  );
};