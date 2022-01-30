import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Elrond Shibas</h1>
    <p>Welcome to the NFT era, fren!</p>
    <p>Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
    <h1>Join us in Shibaworld.</h1>
    <StaticImage
      src="../images/es164.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="An Elrond Shiba this one is number 164"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/rarity/">Rarity</Link>
      <Link to="/social">Social Links</Link>
      <Link to="/wave-6">Wave 6</Link>
    </p>
  </Layout>
)

export default IndexPage
