import React from 'react';
import styles from './Hero.module.css'
import ClientTable from '../ClientTable/ClientTable';

const Hero = () => {
  return (
    <>
      <div className={styles.heading}>
        <h1>Recurring Invoices</h1>
        <button>Add recurring invoice <img src={require("../../assets/Vector6.png")} alt="button" /></button>
      </div>
      <div className={styles.boxs}>
        <div>
          <p># recurring invoices</p>
          <b>215</b>
        </div>
        <div>
          <p>recurring revenue</p>
          <b>€2500/month</b>
        </div>
        <div>
          <p>recurring overdue</p>
          <b>22</b>
        </div>
      </div>
      <ClientTable />
    </>
  )
}

export default Hero