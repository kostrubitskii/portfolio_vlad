'use client'

import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Phrase from '../Phrase/Phrase';
import Projects from '../Projects/Projects';
import Title from '../Title/Title';

import styles from './main.module.scss';

export default function Main() {
  

  return (
    <div>
      <Header />
      <Title />
      <Phrase />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}