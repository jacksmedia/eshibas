/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer className="footer-styling">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Sign up for Shiba details" />
          </div>
        </div>
        <p className="white-txt">
          MADE WITH LOVE BY ELROND SHIBAS
        </p>
        <p className="white-txt">
        Cdo: ERD1X5XYD7WLL5US3RLZTZYFSC8SAZPH5DNRQEN8V90PR34GFPR7S5VQDJV8D7
        </p>
        <p className="white-txt">
          © {new Date().getFullYear()}, 
          {` `}
          <a href="https://www.jacks.media">Jacks Media</a>
        </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
