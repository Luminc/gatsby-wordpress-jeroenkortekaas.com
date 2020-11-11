import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import {Carousel} from 'react-bootstrap'

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`Jeroen Kortekaas`, `Artist`, `Sculpture`]} />

    <Carousel pause={false} indicators={false} className="mb-5">
    {data.allWordpressWpShowcase.edges.map(work => (
        <Carousel.Item>
          <Link 
          to={`/project/${work.node.acf.link_slug}`}
          >
            <Img
              className="d-block w-100"
              sizes={
                work.node.featured_media.localFile.childImageSharp.sizes
              }
              alt={work.node.title}
            />
            </Link>
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="container">
    <h1>Projects</h1>
    <div className="card-columns">
      {data.allWordpressWpProjects.edges.map(project => (
        <div className="card">
          <Link
            to={`/project/${project.node.slug}`}
            key={project.node.wordpress_id}
          >
            <Img
              className="card-img"
              sizes={
                project.node.featured_media.localFile.childImageSharp.sizes
              }
              alt={project.node.title}
            />
          </Link>

          <div className="card-body">
            <Link
              to={`/project/${project.node.slug}`}
              key={project.node.wordpress_id}
            >
              <p className="overline">
                {project.node.acf.medium} — {project.node.acf.year}
              </p>
              <h5 className="card-title">{project.node.title}</h5>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  </>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allWordpressWpShowcase {
      edges {
        node {
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 2500){
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          acf {
            link_slug
          }
        }
      }
    }
    allWordpressWpProjects {
      edges {
        node {
          wordpress_id
          title
          slug
          content
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 900) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          acf {
            materials
            medium
            year
          }
        }
      }
    }
  }
`
