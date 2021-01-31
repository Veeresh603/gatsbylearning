import React from "react"
import styles from "../main/index.module.css"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import InfoBox from "../components/InfoBox"

const home = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Hero />
        <InfoBox />
      


      </Layout>
    </div>
  )
}

export default home
