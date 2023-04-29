import React from 'react';
import styles from './Profile.module.css'


const Profile = () => {
  return (
    <div className={styles.profile}>
        <div>
            <img src={require("../../assets/Ellipse 1.png")} alt="profile" />
        </div>
        <div>
            <h3>Akshay Dhongade</h3>
        </div>
    </div>
  )
}

export default Profile