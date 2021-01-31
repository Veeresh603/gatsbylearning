import React from 'react';
import {Link} from "gatsby"
import styles from "../main/index.module.css"

const data = [
    {
        id:1,
        text:"home",
        url:"/"
    },
    {
        id:2,
        text:"Training",
        url:"/training"
    },{
        id:3,
        text:"Blog",
        url:"/blog"
    },{
        id:4,
        text:"Courses",
        url:"/courses"
    },
    {
        id:5,
        text:"Services",
        url:"/services"
    },
    {
        id:6,
        text:"profile",
        url:"/profile"
    },
]

const tempLinks = data.map(link => {
    return(
        <span key={link.id} className={styles.home}>
        <Link to={link.url} activeStyle={{color: "rgb(252,22,183,1)"}}>{link.text}</Link>
        </span>
    )
})

export default tempLinks


  