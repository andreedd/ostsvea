import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

const PageTemplate = ({ data }) => {

    const value = data.page.content

    const source =  value.replace(/\n/gi, '\n &nbsp;\n');

    return<Layout>
    <div>
        <div className="content">
          <h1>{data.page.title}</h1>
          <ReactMarkdown className="line-break" source={source} />
        </div>
    </div>
    </Layout>
}

export const query = graphql`
query GetSinglePage($slug:String)
  {
    page: strapiPage(title: {eq: $slug}) {
      title
      content
    }
  }
`

export default PageTemplate
