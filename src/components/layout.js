import * as React from "react"
import styled from "styled-components"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Navbar from './Navbar/Navbar'
import PropTypes from "prop-types"
import { useStaticQuery, Link, graphql } from "gatsby"
import '@fortawesome/fontawesome-free/css/all.min.css'
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
      <Navbar />
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
