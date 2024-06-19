import Image from 'next/image';
import styles from './phrase.module.scss';

export default function Phrase() {
  return (
      <div className={styles.container} id='phrase' >
        <Image src='/images/Circles.png' layout='fill' objectFit='cover' quality={100} className={styles.image} alt='background' />\
        <p className={styles.text}>“Design is not just what it looks like and feels like. Design is how it works.”</p>
        <p className={styles.author}>Steve Jobs</p>
      </div>
  );
};
