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
    <div className="level">
      <StaticImage
        className="tile"
        src="../images/es164.png"
        width={275}
        height={275}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="An Elrond Shiba this one is number 164"
        style={{ marginBottom: `1.45rem` }}
      />
      <p className="tile">You hear a low rumbling thunder in the distance followed by crackling and an explosion! What's happening? 
        That's the sound of Elrond Shibas headed to the moon! 
        Cute collectible pixel Shibas and a thriving community!
        Join the pack today! #GMI
      </p>
    </div>
    <div className="level is-mobile wafl-background act-zone">
      <h1 className="syrup-text">WAFL is the Token Elrond Shibs earn you!</h1>
    </div>
    <div className="level is-mobile spacer-zone eshib-bg-1">
      <h1 className="">shib carousel 1</h1>
      <StaticImage
        className="tile"
        src="../images/mainshib.png"
        width={275}
        height={275}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="An Elrond Shiba this one is number 164"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <div className="level is-mobile wafl-background act-zone">
      <h1 className="syrup-text">Not just 1 WAFL per Shib... also LKMEX!!</h1>
    </div>
    <div className="level is-mobile spacer-zone eshib-bg-6">
      <h1 className="tile" id="roadmap">Roadmap</h1>
      <h1 className="tile" id="roadmap">red e.shibs at seaside</h1>
    </div>
    <div className="level is-mobile wafl-background act-zone">
      <h1 className="syrup-text">WAFL comes from Shiba Gardens, too!</h1>
    </div>
    <div className="level is-mobile spacer-zone eshib-bg-7" id="rarity">
      <h1 className="">Rarity</h1>
      <h1 className="">shib carousel 2</h1>
    </div>
    <div className="level is-mobile wafl-background act-zone">
      <h1 className="syrup-text">Swap WAFL on Maiar</h1>
    </div>
    <div className="level is-mobile spacer-zone eshib-bg-5">
      <h1 className="" id="wave6">Wave 6 SOON BORK</h1>
    </div>
    <div className="level is-mobile wafl-background act-zone">
      <h1 className="syrup-text">10 WAFL per week per Garden</h1>
      <h3 className="syrup-text">Read More in Whitepaper!</h3>
    </div>
        <div className="level is-mobile spacer-zone eshib-bg-3">
      <h1 className="" id="whitepaper">Whitepaper</h1>
    </div>
    <div className="level is-mobile wafl-background act-zone">
      <h1 className="syrup-text">WAFL will buy Rare Shibaworld NFTs</h1>
    </div>
    <div className="level is-mobile spacer-zone eshib-bg-4">
      <h1 className="">GHOST SHIBS in forest,foraging cherry and carrot</h1>
    </div>
    <div className="level is-mobile">
      <Link to="/rarity/">Rarity</Link>
      <Link to="/whitepaper">Whitepaper</Link>
      <Link to="/faq">FAQ</Link>
    </div>
  </Layout>
)

export default IndexPage
