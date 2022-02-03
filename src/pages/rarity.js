import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Rarity = () => (
  <Layout>
    <Seo title="Rarity" />
    <div className="pl-2 pt-2">
      <h1>Rarity Page</h1>
      <StaticImage
        className="tile"
        src="../images/virus.svg"
        width={104}
        height={155}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Virus Shib is rarity 0.7%"
        style={{ marginBottom: `1.45rem` }}
      />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Rarity
