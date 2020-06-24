import React from "react"
import { graphql, Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import SEO from "../components/seo"

const ProjectPageTemplate = ({ data, pageContext }) => {
  const { wordpressWpProjects } = data
  const title = wordpressWpProjects.title
  const { next } = pageContext
  const { prev } = pageContext
  return (
    <>
      <SEO title={title} description={wordpressWpProjects.excerpt} />

      <h1 className="text-center">{wordpressWpProjects.title}</h1>
      <p className="overline text-center">
        {wordpressWpProjects.acf.year} &mdash; {wordpressWpProjects.acf.medium}
      </p>
      {wordpressWpProjects.acf.materials ? (
        <p className="text-center">{wordpressWpProjects.acf.materials}</p>
      ) : null}
      <div
        className="mt-5 text-justify mx-auto"
        dangerouslySetInnerHTML={{ __html: wordpressWpProjects.content }}
      />
      <div className="contextual-buttons d-flex justify-content-between">
        {prev ? (
          <TransitionLink to={`/project/${prev.slug}`}>
            {prev.title}
          </TransitionLink>
        ) : null}
        {next ? (
          <TransitionLink to={`/project/${next.slug}`}>
            {next.title}
          </TransitionLink>
        ) : null}
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
