import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container pt-2 pl-2">
      <h1 className="yikes">Elrond Shibas</h1>
      <p className="">Welcome to the NFT era, fren!</p>
      <p>Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
      <h1>Join us in Shibaworld.</h1>
    </div>
    <div className="container spacer-zone eshib-bg-1">
      <h1 className="tile dark-forest-text">From the deep forests of Egold, here come the Elrond Shibas!</h1>
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
    <div className="container wafl-background act-zone">
       <StaticImage
        className="tile ml-5"
        src="../images/wafl.png"
        width={610}
        height={635}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="An Elrond Shiba this one is number 164"
        style={{ marginBottom: `1.45rem` }}
      />
      <h1 className="syrup-text ml-3">WAFL is the Token Elrond Shibas earn you!</h1>
    </div>
    <div className="">
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
      <p className="tile">Another carousel
      </p>
    </div>
    <div className="container wafl-background">
      <div className="act-zone">
        <h1 className="syrup-text tile">Elrond Shibas bring you 2 rewards!!</h1>
        <div className="tile">
          <h2 className="syrup-text">1 WAFL per Shib per week on WAFL Wednesday (1430 UTC)</h2>
          <h3 className="syrup-text p-3">AND increasing amounts of LKMEX farmed from the CDO mint wallet!!</h3>
        </div>
      </div>
    </div>
    <div className="container spacer-zone eshib-bg-2">
      <div className="act-zone">
        <h1 className="tile" id="roadmap">Roadmap to Shibaworld</h1>
        <h2 className="tile" id="roadmap">red e.shibs at seaside</h2>
        <p>Such Moon BORK</p>
        <p>3 shibs hop left to right towards spaceship, right foreground</p>
      </div>
    </div>
    <div className="level wafl-background">
      <div className="act-zone">
      <h1 className="syrup-text pt-5 pl-2">WAFL comes from Shiba FTs, too!</h1>
      <h2 className="syrup-text pl-2">weekly on WAFL Wednesday (1430 UTC):</h2>
      <div className="tile">
        <ul className="tile">
          <li><p className="syrup-text"><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      />1 WAFL per Garden</p></li>
          <li><p className="syrup-text"><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      /><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      />2 WAFL per Farm</p></li>
          <li><p className="syrup-text"><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      /><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      /><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      />3 WAFL per Castle</p></li>
          <li><p className="syrup-text"><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      /><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      /><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      /><StaticImage
        src="../images/wafl.png"
        width={36}
        height={36}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL is the Elrond Shiba special loyalty token"
        style={{ marginBottom: `1.45rem` }}
      />4 WAFL per Spaceship</p></li>
        </ul>
      </div>
      </div>
    </div>
    <div className="container spacer-zone eshib-bg-3" id="rarity">
      <div className="act-zone">
        <h1 className="">Rarity</h1>
        <h1 className="">shib carousel 2</h1>
      </div>
    </div>
    <div className="container wafl-background">
      <div className="act-zone">
        <h1 className="syrup-text">Earn WAFL from HODLing SFTs! ⛲️🚜🏯🚀</h1>
        <StaticImage
          src="../images/wafl.png"
          width={300}
          height={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="WAFL tokens can purchase Shibaworld NFTs"
          style={{ marginBottom: `1.45rem` }}
        />
        <h3 className="syrup-text">WAFL tokens can purchase Shibaworld NFTs</h3>
        <h3 className="syrup-text">Read More in Whitepaper!</h3>
      </div>
    </div>
    <div className="container spacer-zone eshib-bg-4">
      <div className="act-zone">
        <h1 className="" id="whitepaper">
          <Link to="/whitepaper">Whitepaper</Link>
        </h1>
      </div>
    </div>
    <div className="container wafl-background">
      <div className="act-zone">
        <h1 className="syrup-text">WAFL can buy Rare Shibaworld NFTs like AniShib and 3DShib</h1>
      </div>
    </div>
    <div className="container spacer-zone eshib-bg-5">
      <div className="act-zone">
        <h1 className="mt-5 ml-5">Packs of Shibas create FREE SFTs</h1>
        <p>Join us! Adopt a Shiba or ten and earn a Shiba Garden! <Link to="/whitepaper">Read more about our unique project in the Whitepaper</Link>!</p>
      </div>
    </div>
    <div className="container">
      <Link to="/rarity" className="pl-4">Rarity</Link>
      <Link to="/whitepaper" className="">Whitepaper</Link>
      <Link to="/faq" className="pr-4">FAQ</Link>
    </div>
  </Layout>
)

export default IndexPage
