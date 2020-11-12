import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

const ProjectPageTemplate = ({ data, pageContext }) => {
  const { wordpressWpProjects } = data
  const title = wordpressWpProjects.title
  const { next } = pageContext
  const { prev } = pageContext
  return (
    <>
      <SEO title={title} description={wordpressWpProjects.excerpt} />
      <div className="container">
      <p className="overline text-center">
        {wordpressWpProjects.acf.year}
      </p>
      <h1 className="text-center display-3">{wordpressWpProjects.title}</h1>
      {wordpressWpProjects.acf.materials ? (
        <p className="text-center has-text-align-left">{wordpressWpProjects.acf.materials}</p>
      ) : null}
      <div
        className="mt-5 text-justify mx-auto"
        dangerouslySetInnerHTML={{ __html: wordpressWpProjects.content }}
      />
      <div className="contextual-buttons d-flex justify-content-between" style={{ marginTop: "8rem"}}>
        {prev ? (
          <Link to={`/project/${prev.slug}`}>
            <span className="mr-3 text-decoration-none">&lt;</span>
            {prev.title}
          </Link>
        ) : (
          <p className="text-mute">&lt;</p>
        )}
        {next ? (
          <Link to={`/project/${next.slug}`}>
            {next.title}
            <span className="ml-3 text-decoration-none">&gt;</span>
          </Link>
        ) : (
          <span className="text-muted">&gt;</span>
        )}
      </div>
      </div>
    </>
  )
}
export default ProjectPageTemplate

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
      acf {
        materials
        year
        medium
      }
    }
  }
`
