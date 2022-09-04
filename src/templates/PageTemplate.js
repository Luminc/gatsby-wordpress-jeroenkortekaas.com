import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => (
  <>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <div className="container mt-5">
    <h1 className="text-center">{data.wordpressPage.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
    </div>
  </>
)
export default PageTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`
