import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"


const Wave6 = () => (
  <Layout className="wave6-colors">
    <Seo title="Wave 6" className="level is-mobile"/>
     <StaticImage
        className="tile"
        src="../images/wave6-banner.png"
        width={1500}
        height={500}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Wave 6 of 1000 Shibas minting Februrary 7th 2022"
        style={{ marginBottom: `1.45rem` }}
      />    
    <div className="pl-2 pt-2">
      <h1>Wave 6 Minting 2/7/22</h1>
      <h2>1000 Shibas!</h2>
      <h3>0.8 EGLD</h3>
      <h1>At UTC 1400
        <a href="https://mint.elrondshibas.com/"><br/>CLICK HERE</a>
      </h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Wave6
