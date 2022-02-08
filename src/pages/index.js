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
      <div className="columns level">
        <div className="column gray">
          <StaticImage
            className=""
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/es164.png"
            width={70}
            height={70}
            quality={95}
            alt="Elrond Shibas love you!"
          />  
          <p>Cute pfp</p>
        </div>
        <div className="column gray">
           <StaticImage
            className=""
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/es511.png"
            width={70}
            height={70}
            quality={95}
            alt="Elrond Shibas love you!"
          />
          <p>Earns LKMEX on Saturdays!</p>
        </div>
        <div className="column gray">
           <StaticImage
            className=""
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/es720.png"
            width={70}
            height={70}
            quality={95}
            alt="Elrond Shibas love you!"
          />
          <p>Earns $WAFL on Wednesdays!</p>
        </div>
        <div className="column gray">
           <StaticImage
            className=""
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/es884.png"
            width={70}
            height={70}
            quality={95}
            alt="Elrond Shibas love you!"
          />
          <p>Your ticket to SHIBAWORLD & SFTs</p>
        </div>
      </div>
    </div>

    <div className="section spacer-zone eshib-bg-6">
       <div className="columns">
        <div className="column gray">
          <h2>Shiba NFTs with their Own Metaverse</h2>
          <h2>Wait until you hold one for a few weeks!</h2>
          <p>Welcome to the NFT era, fren! Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
          <button className="shibutton">DISCORD</button>
        </div>
        <div className="column gray">big slider of 3</div>
      </div>
    </div>
    <div className="section spacer-zone eshib-bg-1">
      <h1 className="dark-forest-text">From the deep forests of Egold, here come the Elrond Shibas!</h1>
      <div className="slideshow level is-mobile">
        <div className="images01"></div>
      </div>
    </div>

    <div className="section spacer-zone eshib-bg-9">
       <div className="columns">
        <div className="column gray">
          <h2>About</h2>
          <p>Welcome to the NFT era, fren! Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
          <button className="shibutton">BUY NOW</button>
        </div>
        <div className="column gray">big slider of 3</div>
      </div>
    </div>
    <div className="section spacer-zone eshib-bg-3">
      <h1 className="dark-forest-text">From the deep forests of Egold, here come the Elrond Shibas!</h1>
      <div className="slideshow level is-mobile">
        <div className="images01"></div>
      </div>
    </div>


    <div className="section spacer-zone eshib-bg-7">
       <div className="columns">
        <div className="column gray">
          <h2>Earn Passive Income</h2>
          <h2>Maiar Exchange LKMEX</h2>
          <p>Welcome to the NFT era, fren! Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
          <button className="shibutton">BUY NOW</button>
        </div>
        <div className="column gray">big slider of 3</div>
      </div>
    </div>
    <div className="section spacer-zone eshib-bg-21">
      <h1 className="dark-forest-text">From the deep forests of Egold, here come the Elrond Shibas!</h1>
      <div className="slideshow level is-mobile">
        <div className="images01"></div>
      </div>
    </div>


    <div className="section spacer-zone">
       <div className="columns">
        <div className="column gray">
          <h2>WAFL tokens</h2>
          <h2>Shiba love WAFL</h2>
          <p>Welcome to the NFT era, fren! Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
          <button className="shibutton">BUY NOW</button>
        </div>
        <div className="column gray">big slider of 3</div>
      </div>
    </div>
    <div className="section spacer-zone eshib-bg-wafl">
      <h1 className="dark-forest-text">From the deep forests of Egold, here come the Elrond Shibas!</h1>
      <div className="slideshow level is-mobile">
        <div className="images01"></div>
      </div>
    </div>


    <div className="section spacer-zone">
       <div className="columns">
        <div className="column gray">
          <h2>ShibaWorld Awaits</h2>
          <h2>AniShib & 3D Shib</h2>
          <p>Welcome to the NFT era, fren! Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
          <button className="shibutton">BUY NOW</button>
        </div>
        <div className="column gray">big slider of 3</div>
      </div>
    </div>
    <div className="section spacer-zone eshib-bg-5">
      <h1 className="dark-forest-text">Ghostly Shibs exist, too! They all pay LKMEX </h1>
      <div className="slideshow2 level is-mobile">
        <div className="images-1"></div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
