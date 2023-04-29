import React from 'react';
import SideBar from '../SideBar/SideBar';
import styles from './DashBoard.module.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';

const DashBoard = () => {
  return (
    <div className={styles.hero}>
    <aside className={styles.asidesection}>
        <SideBar />
    </aside>
    <section className={styles.herosection}>
        <Header />
        <Hero />
    </section>
    </div>
  )
}

export default DashBoard