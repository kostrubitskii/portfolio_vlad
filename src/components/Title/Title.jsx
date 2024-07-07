'use client'

import Image from 'next/image';
import styles from './title.module.scss';
import card from '../../../public/images/Card.png';
import porfolioLogo from '../../../public/images/Portfolio.png';
import ArrowIconBottom from '@/ui/ArrowIconBottom';
import { useEffect } from 'react';

export default function Title() {
  useEffect(() => {
    const link = document.querySelector('.scroll-link');
    link.addEventListener('click', handleClick);

    return () => {
      link.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetElement = document.getElementById('phrase');

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.test}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p className={styles.proffesionTitle}>DESIGNER</p>
          <p className={styles.proffesionTitle}>UX/UI</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p className={styles.aboutText}>2024</p>
          <p className={styles.aboutText}>COLLABORATE</p>
        </div>
      </div>

      <div className={styles.containerTest}>
        <p className={styles.portfolioText}>2 PROJECTS</p>
        <p className={styles.portfolioText}>1 YEAR IN DESIGN</p>
      </div>

      <div className={styles.imgContainer}>
        <Image src={card} alt='card' className={styles.cardImage} quality={100} />
        <Image src={porfolioLogo} alt='logo' className={styles.portfolioLogo} quality={100} />
      </div>

      <div className={styles.scrollContainer}>
        <p className={styles.scrollText}>Scroll down to see more</p>
        <a href="#phrase" className={`${styles.link} scroll-link`}>
          <ArrowIconBottom />
        </a>
      </div>
    </div>
  );
};