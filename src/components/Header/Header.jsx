'use client'

import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import Menu from '../Menu/Menu';

export default function Header({ backgroundColor, textColor, borderColor }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <>
      {!isOpen && (
        <header style={{ backgroundColor }}>
          <div className={styles.container} style={{ borderColor }}>
            <div className={styles.menu} onClick={toggleMenu}>
              <div className={styles.lines} style={{ borderColor }}></div>
              <p className={styles.text} style={{ color: textColor }}>MENU</p>
              <div className={styles.lines} style={{ borderColor }}></div>
            </div>
          </div>
        </header>
      )}
      {isOpen && <Menu toggleMenu={toggleMenu} />}
    </>
  );
};
