import Image from 'next/image';
import Link from 'next/link';
import styles from './projects.module.scss';

import firstPng from '../../../public/images/Project4.png';
import ArrowIconRight from '@/ui/ArrowIconRight';
import secontPng from '../../../public/images/Project2.jpg';


export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>EXPLORE <br />PROJECTS</p>

      <div className={styles.projectBlock}>
        <div className={styles.border}>
          <Image src={firstPng} alt="project1" className={styles.image} />

        </div>
        <div className={styles.heading}>
          <p className={styles.headers}>Project/01</p>
          <p className={styles.headers}>Mobile App</p>
        </div>
        <div className={styles.link}>
          <p className={styles.linkTo}>Book appointment</p>
          <Link href="https://www.behance.net/gallery/197496905/Booking-Appointment-App-UXUI-Design" target="_blank">
            <ArrowIconRight width={14} height={14} className={styles.arrow}/>
          </Link>
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.secondProjectBlock}>
        <div className={styles.border}>
          <Image src={secontPng} alt="project2" className={styles.secondImage} />

        </div>
        <div className={styles.heading}>
          <p className={styles.headers}>Project/02</p>
          <p className={styles.headers}>Web Service</p>
        </div>
        <div className={styles.link}>
          <p className={styles.linkTo}>Task manager</p>
          <Link href="https://www.behance.net/gallery/198080143/Task-Manager-UXUI-Design" target="_blank">
            <ArrowIconRight width={14} height={14} className={styles.arrow} />
          </Link>
        </div>
        <div className={styles.lastLine}></div>
      </div>
    </div>
  );
};