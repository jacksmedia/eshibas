import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className='header-styling'>
    <ul className="level unbullet">
      <li className="level-item has-text-centered">
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
      </li>
      <li className="level-item has-text-centered"><Link className="link" to="/whitepaper">Whitepaper</Link></li>
      <li className="level-item has-text-centered"><Link className="link" to="/social">Social</Link></li>
      <li className="level-item has-text-centered">
        <StaticImage
          src="../images/mainshib.png"
          width={120}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="An Elrond Shibas only on Elrond"
          style={{ marginBottom: `1.45rem` }}
        />
      </li>
      <li className="level-item has-text-centered"><Link className="link" to="/rarity">Rarity</Link></li>
      <li className="level-item has-text-centered"><Link className="link" to="/faq">FAQ</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Elrond Shibas`,
}

export default Header
