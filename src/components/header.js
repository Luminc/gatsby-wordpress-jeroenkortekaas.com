import { Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems {
          items {
            object_slug
            title
          }
        }
      }
    `}
    render={data => (
      <header>
        <div className="container-fluid d-flex justify-content-between align-items-center" style={{height: `3rem`, zIndex: "10"}}>
          <Link to="/" className="mx-2 logo">
            Jeroen Kortekaas
          </Link>
          <ul
            style={{ listStyle: `none`, display: `flex`, margin: 0 }}
            className="list-unstyled"
          >
            <Link to={`/`} className="mx-2">
              Works
            </Link>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug} style={{ margin: `0 10px` }}>
                <Link to={`/${item.object_slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
