import React from 'react'
import styles from "../main/dummycourse.module.css"

const FeaturedCourse = () => {
  return (
    <div className={styles.container}>
    <div className={styles.container1}>
      <div className={styles.sidesection}>
        <h1 className={styles.h1}>
          DIploma in Machine Learning and AI
          <br />
        </h1>
        <h1 className={styles.text}>
          Diploma in Cyber Security
          <br />
        </h1>
        <h1 className={styles.text1}>
          Ethical Hacking
          <br />
        </h1>
      </div>
      <div className={styles.mainsection}>
        <div className={styles.column01}>
          <h1 className={styles.text2}>
            DIploma in Machine Learning and AI
          </h1>
        </div>
        <div className={styles.column02}></div>
        <span className={styles.text3}>
          Descrption
          <br />
        </span>
        <h4 className={styles.text4}>
          Ethical hacking also known as penetration testing/ cyber security is a practice of
          hacking/gaining access to a protected technology ethically or with proper authorization.
          An ethical hacker strives to replicate the working of a black hat hacker by analyzing
          the defense protocols and social-engineering aspects of an organization. His job is to
          make sure the organization reacts to these situations well enough if they are already
          not doing so. Many IT Professionals as well as Career Starters have taken up the course
          and for those who passed, almost all are gainfully employed with successful careers, but
          the landscape is changing. Cyber Security as a profession is evolving, the barrier to
          entry is rising, the demand for Skilled Cyber professionals continues to grow, but it is
          being refined, demanding a higher level of skill and ability. This course is designed in
          such a way that even students from non IT background won’t face any sort of difficulty
          to cope up with the syllabus. With experienced trainers on board, every concept is
          covered from scratch and are delivered in the best possible way there is.
        </h4>
        <svg viewBox="0 0 1024 1024" className={styles.icon}>
          <title>play_arrow</title>
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
      </div>
    </div>
  </div>
  )
}

export default FeaturedCourse
