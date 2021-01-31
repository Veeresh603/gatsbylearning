import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styles from "../main/index.module.css"
import NavLinks from "../constants/link"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      fixed: file(relativePath: { eq: "ana.png" }) {
        childImageSharp {
          fixed(width: 200) {
            src
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className={styles.menu}>
      <div className={styles.analogoimage}>
        <Image fixed={data.fixed.childImageSharp.fixed} alt="logo" />
      </div>

      <div className={styles.menucontainer}>
       {NavLinks}
        
      </div>
    </div>
  )
}

export default Navbar
