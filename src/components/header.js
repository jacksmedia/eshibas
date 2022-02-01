import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className='header-styling'>
    <ul className="level unbullet is-hidden-touch">
      <li className="level-item has-text-centered">
        <h1>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </li>
      <li className="level-item has-text-centered"><Link className="link" to="/whitepaper">Whitepaper</Link></li>
      <li className="level-item has-text-centered"><Link className="link" to="/roadmap">Roadmap</Link></li>
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
    <div class="dropdown is-active is-hidden-desktop">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>...</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="/" class="dropdown-item">Home</a>
          <a href="/whitepaper" class="dropdown-item">Whitepaper</a>
          <a class="dropdown-item">wowowowowowowow</a>
          <a href="/rarity" class="dropdown-item">Rarity</a>
          <a href="#wave6" class="dropdown-item">Wave 6</a>
          <hr class="dropdown-divider" />
          <a href="/roadmap" class="dropdown-item">Roadmap</a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Elrond Shibas`,
}

export default Header
