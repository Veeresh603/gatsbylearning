import React from 'react'
import styles from "../main/index.module.css"
import anagirl from "../images/anagirl.svg"


const Hero = () => {
    return (
        
        <div className={styles.hero}>
        <img
          src= {anagirl}
          className={styles.anagirlimage}
        />
        <h2 className={styles.text01}>
        Let’s get you from <span className={styles.text01_animation}>If-Else</span> to <span className={styles.text01_animation}>What else!</span>
        </h2>
      </div>
    )
}

export default Hero
