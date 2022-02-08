import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
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
      <main className="container">{children}</main>
      <div className="level is-mobile m-5">
        <Link to="/rarity" className="pl-4">Rarity</Link>
        <Link to="/wave6" className="pr-4">Wave 6 of 10</Link>
        <Link to="/whitepaper" className="">Whitepaper</Link>
      </div>
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
        Cdo: erd1x5xyd7wll5us3rlztzyfsc8sazph5dnrqen8v90pr34gfpr7s5vqdjv8d7
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
