import React from 'react';
import styles from './MiniDashbord.module.css'

const MiniDashbord = () => {
  return (
    <div className={styles.mini}>
        <div>
            <h4>Last 30 days:</h4>
        </div>
        <div className={styles.box1}>
            <p>PAID</p>
            <p>€24.000</p>
        </div>
        <div className={styles.box2}>
            <p>PENDEING</p>
            <p>€41.000</p>
        </div>
        <div className={styles.box3}>
            <p>OVERDUE</p>
            <p>€65.600</p>
        </div>
    </div>
  )
}

export default MiniDashbord