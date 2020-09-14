import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from "react-markdown"

const IndexPage = ( ) => {

  const data = useStaticQuery(graphql`
  {
    allStrapiPage {
      nodes {
        content
        title
      }
    }
  }
`)

  let content
  let isTitle = false

  data.allStrapiPage.nodes.forEach(page => {
    if(page.title === "Startsida"){
      isTitle = true
      const value = page.content
      const source =  value.replace(/\n/gi, '\n &nbsp;\n');
      content = <ReactMarkdown className="line-break" source={source} />
    }
  });

  return<Layout>
    <SEO title="Startsida" />
    <div className="hero">
      <Image />
      <div className="hero-text">
        <h1>ÖSTSVEA</h1>
        <h3 className="hero-sub">vid Åbo Akademi rf</h3>
      </div>
    </div>
    <div className="content">
      <div>
      <h1>Välkommen till Östsvea</h1>
      {isTitle
        ? <div>{content}</div>
        : <div>
          <p>Östsvea vid Åbo Akademi rf är ämnesföreningen för de som studerar svenska språket vid Åbo Akademi. 
          Föreningen är också öppen för andra studeranden som vill ta del av vår verksamhet. Östsvea grundades år 1975. 
          Följ oss på Instagram och gilla vår Facebook-sida för att hålla koll på vad som pågår inom föreningen.</p>
          <br/>
          <p>Vi har även en egen maskot, nämligen renen Svea Öst! Du kan hitta hen på Facebook och skickar du en vänförfrågan så får du veta vad som händer i föreningen. 
            Gilla också vår medlemssida - sök på Östsvea så hittar du oss!</p>
          </div>
       }
      </div>
    </div>
    <div className="icons">
      <a href="https://www.instagram.com/ostsvea/">
        <FontAwesomeIcon
          className="fa-2x"
          icon={faInstagram}
        />
      </a>
      <a href="https://www.facebook.com/ostsvea/">
        <FontAwesomeIcon
          className="fa-2x"
          icon={faFacebookSquare}
        />
      </a>
    </div>
  </Layout>
}

export default IndexPage