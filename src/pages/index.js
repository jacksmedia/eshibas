import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container pt-2 pl-2">
      <h1>Elrond Shibas</h1>
      <p>Welcome to the NFT era, fren!</p>
      <p>Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
      <h1>Join us in Shibaworld.</h1>
    </div>
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
      <h1 className="tile">From the deep forests of Egold, here come the Elrond Shibas!</h1>
      <div className="tile">
        <StaticImage
          src="../images/mainshib.png"
          width={300}
          height={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="An Elrond Shiba this one is number 164"
          style={{ marginBottom: `1.45rem` }}
        />
        <p>shib carousel 1</p>
      </div>
    </div>
    <div className="level is-mobile wafl-background">
      <div className="level is-mobile act-zone">
        <h1 className="syrup-text">Bringing you 2 rewards!!</h1>
        <h2 className="syrup-text">1 WAFL per Shib + LKMEX!!</h2>
      </div>
    </div>
    <div className="level is-mobile spacer-zone eshib-bg-2">
      <div className="act-zone">
        <h1 className="tile" id="roadmap">Roadmap to Shibaworld</h1>
        <h1 className="tile" id="roadmap">red e.shibs at seaside</h1>
      </div>
    </div>
    <div className="level is-mobile wafl-background">
      <div className="level is-mobile act-zone">
        <h1 className="syrup-text">WAFL comes from Shiba Gardens, too!</h1>
      </div>
    </div>
    <div className="level is-mobile spacer-zone eshib-bg-3" id="rarity">
      <div className="level is-mobile act-zone">
        <h1 className="">Rarity</h1>
        <h1 className="">shib carousel 2</h1>
      </div>
    </div>
    <div className="level is-mobile wafl-background">
      <div className="level is-mobile act-zone">
        <h1 className="syrup-text">10 WAFL per week per Garden</h1>
        <h3 className="syrup-text">Read More in Whitepaper!</h3>
      </div>
    </div>
    <div className="level is-mobile spacer-zone eshib-bg-4">
      <div className="level is-mobile act-zone">
        <h1 className="" id="whitepaper">
          <Link to="/whitepaper">Whitepaper</Link>
        </h1>
      </div>
    </div>
    <div className="level is-mobile wafl-background">
      <div className="level is-mobile act-zone">
        <h1 className="syrup-text">WAFL can buy Rare Shibaworld NFTs like AniShib and 3DShib</h1>
      </div>
    </div>
    <div className="level is-mobile spacer-zone eshib-bg-5">
      <div className="act-zone">
        <h1 className="">Packs of Shibas create FREE SFTs</h1>
        <p>Join us! Adopt a Shiba or ten and earn a Shiba Garden! <Link to="/whitepaper">Read more about our unique project in the Whitepaper</Link>!</p>
      </div>
    </div>
    <div className="level is-mobile">
      <Link to="/rarity/">Rarity</Link>
      <Link to="/whitepaper">Whitepaper</Link>
      <Link to="/faq">FAQ</Link>
    </div>
  </Layout>
)

export default IndexPage
