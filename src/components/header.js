import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className='header-styling'>
    <nav className="level">
      <p className="level-item has-text-centered">
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </p>
      <p className="level-item has-text-centered"><Link className="link" to="/whitepaper">Whitepaper</Link></p>
      <p className="level-item has-text-centered"><Link className="link" to="/social">Social</Link></p>
      <p className="level-item has-text-centered">
        <StaticImage
          src="../images/mainshib.png"
          width={120}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="An Elrond Shibas only on Elrond"
          style={{ marginBottom: `1.45rem` }}
        />
      </p>
      <p className="level-item has-text-centered"><Link className="link" to="/rarity">Rarity</Link></p>
      <p className="level-item has-text-centered"><Link className="link" to="/faq">FAQ</Link></p>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Elrond Shibas`,
}

export default Header
