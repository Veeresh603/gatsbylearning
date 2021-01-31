import React from "react"
import { IoBuildOutline } from "react-icons/io5"
import { IoGitCompareOutline } from "react-icons/io5"
import { IoRocketOutline } from "react-icons/io5"
import styles from "../main/index.module.css"
import {Link} from "gatsby"

 
const data = [
    {
      id: 1,
      title: "We build",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum rutrum sapien, posuere euismod diam lacinia nec. Integer mollis gravida eros, eu posuere nibh. Nam eleifend, lacus vel tempus vehicula, nulla ligula tincidunt risus, id feugiat nisl eros vel justo. Cras efficitur mattis mauris quis vehicula. ",
      icon: <IoBuildOutline className={styles.icon2}/>,
      url: '/'
    },
    {
      id: 2,
      title: "We Train",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum rutrum sapien, posuere euismod diam lacinia nec. Integer mollis gravida eros, eu posuere nibh. Nam eleifend, lacus vel tempus vehicula, nulla ligula tincidunt risus, id feugiat nisl eros vel justo. Cras efficitur mattis mauris quis vehicula. ",
      icon: <IoGitCompareOutline className={styles.icon2}/>,
      url: '/'
  
    },
    {
      id: 3,
      title: "We Brand",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum rutrum sapien, posuere euismod diam lacinia nec. Integer mollis gravida eros, eu posuere nibh. Nam eleifend, lacus vel tempus vehicula, nulla ligula tincidunt risus, id feugiat nisl eros vel justo. Cras efficitur mattis mauris quis vehicula. ",
      icon: <IoRocketOutline className={styles.icon2}/>,
      url: '/'
  
    },
  ]

const InfoBox = () => {
    
    return (
        <div className={styles.secondcontainer}>
       
          {data.map((item) => {
              return(
                <div className={styles.maincontainer}>
                <div className={styles.container05}>
                {item.icon}
         
                 </div>
                 <div className={styles.container06}>
                   <span className={styles.text05}>{item.title}</span>
                   <span className={styles.text06}>
                     {item.desc}
                   </span>
                 </div>
                 <div className={styles.container07}>
         
                   <Link to={item.url} className={styles.text07}>Read more</Link>
                   <svg viewBox="0 0 1024 1024" className={styles.icon3}>
                     <title>arrow_forward</title>
                     <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                   </svg>
                 </div>
                 </div>
              )
          })}
       
       </div>
    )
}

export default InfoBox
