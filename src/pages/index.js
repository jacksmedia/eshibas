import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import WaflToken from "../components/WaflToken"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="section pt-2 pl-2 eshib-bg-2">
      <h1 className="hero-size-text">Elrond Shibas</h1>
      <p className="">Welcome to the NFT era, fren!</p>
      <p>Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
      <h1>Join us in Shibaworld.</h1>
    </div>
    <div className="section spacer-zone">
      <p>#wagmi</p>
    </div>
    <div className="section spacer-zone eshib-bg-1">
      <h1 className="dark-forest-text">From the deep forests of Egold, here come the Elrond Shibas!</h1>
      <div className="slideshow level is-mobile">
        <div className="images01"></div>
        <p className="">The entire collection comprises 5000 NTFs and 7777 SFTs.</p>
      </div>
    </div>

  </Layout>
)

export default IndexPage
