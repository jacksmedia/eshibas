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
    <p>Elrond blockchain is home to 5000 Shiba pets that pay you! Join us in Shibaworld.</p>
    <StaticImage
      src="../images/es164.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="An Elrond Shiba this one is number 164"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
