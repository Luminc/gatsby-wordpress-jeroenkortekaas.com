import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <ul style={{ listStyle: "none" }}>
      {data.allWordpressWpProjects.edges.map(post => (
        <li
          key={post.node.wordpress_id}
          style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
        >
          <Link
            to={`/post/${post.node.slug}`}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
            <Img
              sizes={post.node.featured_media.localFile.childImageSharp.sizes}
              alt={post.node.title}
              style={{ width: "25%", marginRight: 20 }}
            />
            <div style={{ width: "75%" }}>
              <h3
                dangerouslySetInnerHTML={{ __html: post.node.title }}
                style={{ marginBottom: 0 }}
              />
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
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
                sizes(maxWidth: 600) {
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
