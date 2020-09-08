import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

const UPageTemplate = ({ data }) => {

    return<Layout>
    <div>
        {data.page.image != null &&
            <Img fluid={data.page.image.childImageSharp.fluid} />
        }
        <div className="content">
          <h1>{data.page.title}</h1>
          <ReactMarkdown source={data.page.content} />
        </div>
    </div>
    </Layout>
}

export const query = graphql`
query GetSingleUnlinkedPage($slug:String)
  {
    page: strapiUnlinkedPage(title: {eq: $slug}) {
      title
      content
      image{
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default UPageTemplate
