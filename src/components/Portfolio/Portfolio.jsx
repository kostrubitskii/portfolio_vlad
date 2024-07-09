'use client'

import Header from '../Header/Header';
import styles from './portfolio.module.scss';
import firstPng from '../../../public/images/Project4.png'
import secondPng from '../../../public/images/Project3.jpg'
import Image from 'next/image';
import Copy from '@/ui/Copy';
import ArrowIconLight from '@/ui/ArrowIconLight';
import Footer from '../Footer/Footer';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div>
      <Header backgroundColor={'#0F0F0E'} textColor={'white'} borderColor={'white'} />
      <div className={styles.title}>
        <div className={styles.container}>
          <p className={styles.text}>The project is visually appealing, ensuring fast booking and easy planning through intuitive navigation.</p>
        </div>

        <div className={styles.info}>
          <div className={styles.portfolio}>
            <p className={styles.text}>UX/UI </p>
            <p className={styles.text}>User Centric Design</p>
            <p className={styles.text}>Mobile App</p>
          </div>

          <div className={styles.language}>
            <p className={styles.text}>Interface Language</p>
            <p className={styles.text}>EN</p>
          </div>
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.imageContainer}>
          <div className={styles.border}>
            <Image src={firstPng} alt="project1" className={styles.image} />
          </div>

          <div className={styles.about}>
            <p className={styles.name}>Appoint</p>
            <div className={styles.textContainer}>
              <p className={styles.aboutText}>Pro.01</p>
              <p className={styles.aboutText}>Book Appointment</p>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <div className={styles.author}>
            <div className={styles.authorContainer}>
              <Copy />
              <p className={styles.authorText}>Designed by</p>
            </div>
            <p className={styles.authorText} >Vladyslav Ivanchuk</p>
          </div>

          <Link className={styles.link} href={'https://www.behance.net/gallery/197496905/Booking-Appointment-App-UXUI-Design'} target='_blank'>
            <p className={styles.more}>Explore project</p>
            <ArrowIconLight />
          </Link>
        </div>

      </div>

      <div className={styles.title}>
        <div className={styles.container}>
          <p className={styles.text}>The goal was to simplify task management without losing features, ensuring users can easily manage tasks.</p>

        </div>
        <div className={styles.info}>
          <div className={styles.portfolio}>
            <p className={styles.text}>UX/UI </p>
            <p className={styles.text}>User Centric Design</p>
            <p className={styles.text}>Web Service + Mobile Adaptive</p>
          </div>

          <div className={styles.language}>
            <p className={styles.text}>Interface Language</p>
            <p className={styles.text}>EN</p>
          </div>
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.imageContainer}>
          <div className={styles.border}>
            <Image src={secondPng} alt="project1" className={styles.secondImage} />
          </div>
      
          <div className={styles.about}>
            <p className={styles.name}>Ghosty</p>
            <div className={styles.textContainer}>
              <p className={styles.aboutText}>Pro.02</p>
              <p className={styles.aboutText}>Task Manager</p>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <div className={styles.author}>
            <div className={styles.authorContainer}>
              <Copy />
              <p className={styles.authorText}>Designed by</p>
            </div>
            <p className={styles.authorText} >Vladyslav Ivanchuk</p>
          </div>

          <Link className={styles.link} href={'https://www.behance.net/gallery/198080143/Task-Manager-UXUI-Design'} target='_blank'>
            <p className={styles.more}>Explore project</p>
            <ArrowIconLight />
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
};