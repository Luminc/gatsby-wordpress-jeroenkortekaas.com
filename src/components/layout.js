/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Socials from "./Socials"

import "./layout.css"
import "./App.css"
// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer className="footer">
          <a
            href="mailto:studio@esperanzadevries.com"
            target="_top"
            className="btn btn-outline-dark rounded-pill btn-md px-4 py-2"
          >
            studio@esperanzadevries.com
          </a>
          <Socials />
          <div className="social">
            <a
              href="https://www.instagram.com/vrievries/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-instagram light text-decoration-none p-2"
            ></a>
            <a
              href="mailto:studio@esperanzadevries.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-envelope light text-decoration-none p-2"
            ></a>
            <a
              href="https://www.facebook.com/zwadderich"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-facebook light text-decoration-none p-2"
            ></a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Esperanza de Vries, All rights
            reserved
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
