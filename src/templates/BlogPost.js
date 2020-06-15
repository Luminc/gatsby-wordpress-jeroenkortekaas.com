import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => (
  <>
    <SEO
      title={data.wordpressWpProjects.title}
      description={data.wordpressWpProjects.excerpt}
    />
    <Link to="/">Back</Link>
    <h1>{data.wordpressWpProjects.title}</h1>
    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressWpProjects.content }}
    />
  </>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressWpProjects(wordpress_id: { eq: $id }) {
      featured_media {
        localFile {
          childImageSharp {
            sizes {
              src
            }
          }
        }
      }
      title
      content
    }
  }
`
