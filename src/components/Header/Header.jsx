import React from 'react'
import styles from './Header.module.css'
import SideBar from '../SideBar/SideBar'
import MiniDashbord from '../MiniDashbord/MiniDashbord'
import Profile from '../Profile/Profile'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.sidebar}>
            <MiniDashbord />
            <Profile />
        </div>
    </div>
  )
}

export default Header