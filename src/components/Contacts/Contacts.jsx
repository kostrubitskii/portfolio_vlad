'use client'

import Header from "../Header/Header";
import Link from "next/link";
import ArrowIconRight from "@/ui/ArrowIconRight";
import Copy from "@/ui/Copy";
import styles from './contacts.module.scss';
import Form from "../Form/Form";

export default function Contacts() {


  return (
    <div className={styles.container}>
      <Header backgroundColor={'#0F0F0E'} textColor={'white'} borderColor={'white'} />
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p className={styles.text}>Let’s connect to create something interesting</p>
          <h1 className={styles.title}>Say hello.</h1>
        </div>

        <div className={styles.mainBlock}>
          <div className={styles.contactsBlock}>
            <div className={styles.contacts}>
              <div className={styles.contactsWrapper}>
                <p className={styles.contactType}>E-mail:</p>
                <p className={styles.contactInfo}>ivanchukvladislav1@gmail.com</p>
              </div>

              <div className={styles.contactsWrapper}>
                <p className={styles.contactType}>Phone number:</p>
                <p className={styles.contactInfo}>+38 [097] 414 67 63</p>
              </div>
            </div>

            <div className={styles.media}>
              <div className={styles.mediaWrapper}>
                <p className={styles.mediaName}>Linkedin</p>
                <Link href="/" className={styles.mediaArrow}>
                  <ArrowIconRight width={16} height={16} color="#FFFFFF" />
                </Link>
              </div>

              <div className={styles.mediaWrapper}>
                <p className={styles.mediaName}>Behance</p>
                <Link href='https://www.behance.net/5facac47' className={styles.mediaArrow}>
                  <ArrowIconRight width={16} height={16} color="#FFFFFF" />
                </Link>
              </div>
            </div>
          </div>

          <Form />
        </div>
      </div>

      <div className={styles.lastBlock}>
        <p className={styles.country}>Ukraine</p>
        <div className={styles.box}>
          <Copy classNames={styles.copy} />
          <p className={styles.year}>2024</p>
        </div>
      </div>
    </div>
  );
};