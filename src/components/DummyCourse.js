import React from "react"
import styles from "../main/dummycourse.module.css"
import { useStaticQuery, graphql } from "gatsby"
import ReactPlayer from 'react-player/lazy'


const DummyCourse = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiCourses {
        nodes {
          strapiId
          title
          url
          slug
          descrption
        }
      }
    }
  `)
  const {
    allStrapiCourses: { nodes: courses },
  } = data
  const [value, setValue] = React.useState(0)
  const { title, descrption, url, strapiId } = courses[value]

  const handleClick = id => {
    setValue(id)
  }
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.sidesection}>
          {courses.map((course, id) => {
            return (
              <>
                <button
                  className={styles.h1}
                  key={course.strapiId}
                  onClick={() => handleClick(id)}
                >
                  {course.title}
                  <br />
                </button>
              </>
            )
          })}
        </div>

        <div className={styles.mainsection}>
          <div className={styles.column01}>
            <h1 className={styles.text2} key={strapiId}>{title}</h1>
          </div>
          <div className={styles.column02}>
            <ReactPlayer  width= "100%" url = {url} />
          
           
          </div>
          <span className={styles.text3}>
            Descrption
            <br />
          </span>
          <h4 className={styles.text4}>{descrption}</h4>
          <svg viewBox="0 0 1024 1024" className={styles.icon}>
            <title>play_arrow</title>
            <path d="M342 214l468 298-468 298v-596z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DummyCourse
