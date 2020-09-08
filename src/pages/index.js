import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => (
  <Layout>
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
        <p>Östsvea är ämnesföreningen för alla som studerar svenska som huvudämne eller biämne vid Åbo Akademi. 
          Föreningen är också öppen för andra som vill vara med och umgås i vårt glada gäng. 
          Föreningen grundades år 1975 och brukar ordna olika evenemang för sina medlemmar, såsom frukost- och kaffeträffar och olika sitzar. 
          Svenska dagen den 6:e november och Runebergsdagen den 5:e februari är dagar vi i synnerhet kommer ihåg.</p>
        <br/>
        <p>Vi har även en egen maskot, nämligen renen Svea Öst! Du kan hitta hen på Facebook och skickar du en vänförfrågan så får du veta vad som händer i föreningen. 
          Gilla också vår medlemssida - sök på Östsvea så hittar du oss!</p>
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
)

export default IndexPage
