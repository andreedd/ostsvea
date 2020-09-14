import React, {useState } from 'react'

import {Link, useStaticQuery, graphql} from "gatsby"
import styles from "./styles/navbar.module.css"
import logo from "../images/ostsvealogoclean.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faTimes} from '@fortawesome/free-solid-svg-icons'
import Img from "gatsby-image"

const Navbar = () => {
    const data = useStaticQuery(graphql`
    {
      allStrapiPage(sort: {fields: created_at}) {
        nodes {
          title
        }
      }
      allStrapiLink {
        nodes {
          url
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "ostsvealogoclean.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let slugify = require('slugify')
  const [showMenu, setShowMenu] = useState(false)

  console.log(data.placeholderImage.childImageSharp.fluid)

    return (
        <nav className={styles.navbar}>
          <Link to="/"><Img className={styles.logo} fluid={data.placeholderImage.childImageSharp.fluid} /></Link>
          <div className={styles.burger}>
          {!showMenu
            ? <FontAwesomeIcon
                className="fa-2x"
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)}
              />
            : <FontAwesomeIcon
                className="fa-2x"
                icon={faTimes}
                onClick={() => setShowMenu(!showMenu)}
              />
          }
          </div>

          <ul id={styles.mobileNav} className={showMenu ? styles.slideIn : styles.slideOut}>
          <Link to={"/"}><li>Startsida</li></Link>
            {data.allStrapiPage.nodes.map((page)=> {
                return <Link to={`/pages/${slugify(page.title)}`} key={page.title}>
                    <li>{page.title}</li>
                </Link>
              })}
              <br/>
              {data.allStrapiLink.nodes.map((link)=> {
                  return <a href={link.url} key={link.title}>
                      <li>{link.title}</li>
                  </a>
              })}
        </ul> 
        </nav>
    )
}

export default Navbar