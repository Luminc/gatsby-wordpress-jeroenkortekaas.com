import { Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../common/Logo"
import Burger from "./Burger"
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
      <header
        style={{
          marginBottom: `1.45rem`,
        }}
      >
        {/* <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        > */}
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/">
            <Logo />
          </Link>

          <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
            <Link to={`/`} className="mx-2">
              Works
            </Link>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug} style={{ margin: `0 10px` }}>
                <Link
                  to={`/${item.object_slug}`}
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                    fontFamily: `sans-serif`,
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Burger />
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
