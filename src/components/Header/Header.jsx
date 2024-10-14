'use client'

import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import Menu from '../Menu/Menu';
import OpenMenu from '@/ui/OpenMenu';

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
              <OpenMenu className={styles.lines} />
              <p className={styles.text} style={{ color: textColor }}>MENU</p>
              <OpenMenu className={styles.lines} />
              
            </div>
          </div>
        </header>
      )}
      {isOpen && <Menu toggleMenu={toggleMenu} />}
    </>
  );
};
