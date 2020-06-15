import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const ProjectPageTemplate = ({ data }) => (
  <>
    <SEO
      title={data.wordpressWpProjects.title}
      description={data.wordpressWpProjects.excerpt}
    />

    <h1 className="text-center">{data.wordpressWpProjects.title}</h1>
    <p className="overline text-center">
      {data.wordpressWpProjects.acf.year} &mdash;{" "}
      {data.wordpressWpProjects.acf.medium}
    </p>
    {data.wordpressWpProjects.acf.materials ? (
      <p className="text-center">{data.wordpressWpProjects.acf.materials}</p>
    ) : null}
    <div
      className="mt-5 text-justify mx-auto"
      dangerouslySetInnerHTML={{ __html: data.wordpressWpProjects.content }}
    />
  </>
)
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
