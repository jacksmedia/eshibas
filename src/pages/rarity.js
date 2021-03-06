import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Rarity = () => (
  <Layout>
    <Seo title="Rarity" />
    <div className="container is-fluid pt-3">
      <h1>ElrondShibas(SHIB-50039b) Collection Rarity</h1>
      <h2>All Shiba Digs</h2>
      <StaticImage
        className="tile"
        src="../images/rarity/r-digs.png"
        width={1438}
        height={1033}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="All Shiba Digs"
        style={{ marginBottom: `1.45rem` }}
      />
      <h2>All Shiba Specs</h2>
      <StaticImage
        className="tile"
        src="../images/rarity/r-specs.png"
        width={1438}
        height={809}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="All Shiba Specs"
        style={{ marginBottom: `1.45rem` }}
      />
      <h2>All Shiba Headpieces</h2>
      <StaticImage
        className="tile"
        src="../images/rarity/r-headpiece.png"
        width={1438}
        height={808}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="All Shiba Headpieces"
        style={{ marginBottom: `1.45rem` }}
      />
      <h2>Shiba Fur types</h2>
      <StaticImage
        className="tile"
        src="../images/rarity/r-fur.png"
        width={1438}
        height={456}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Shiba Fur types"
        style={{ marginBottom: `1.45rem` }}
      />

     <h1>Rarity scores will fluctuate while the Collection is in mint.</h1>
     <p>The entire collection comprises 5000 NTFs and 7777 SFTs.</p>
    </div>
  </Layout>
)

export default Rarity
