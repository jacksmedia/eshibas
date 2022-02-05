import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import WaflToken from "../components/WaflToken"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container is-fluid pt-2 pl-2">
      <h1 className="yikes">Elrond Shibas</h1>
      <div class="slideshow level is-mobile"><div class="images01"></div></div>
      <div class="slideshow level is-mobile"><div class="images02"></div></div>
      <p className="">Welcome to the NFT era, fren!</p>
      <p>Elrond blockchain is home to 5000 Shiba pets that pay you!</p>
      <h1>Join us in Shibaworld.</h1>
    </div>
    <div className="container is-fluid spacer-zone eshib-bg-1">
      <h1 className="dark-forest-text">From the deep forests of Egold, here come the Elrond Shibas!</h1>
    </div>
    <div class="slideshow level is-mobile"><div class="images03"></div></div>
    <p>The entire collection comprises 5000 NTFs and 7777 SFTs.</p>
    <div className="container is-fluid wafl-background act-zone">
       <StaticImage
        className="tile ml-5"
        src="../images/wafl.png"
        width={610}
        height={635}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="WAFL token"
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
      <p className="tile">Another carousel</p>
    </div>
    <div className="container is-fluid wafl-background">
      <div className="act-zone">
        <h1 className="syrup-text tile">Elrond Shibas bring you 2 rewards!!</h1>
        <div className="tile">
          <h2 className="syrup-text">1 WAFL per Shib per week on WAFL Wednesday (1430 UTC)</h2>
          <h3 className="syrup-text p-3">AND increasing amounts of LKMEX farmed from the CDO mint wallet!! #ShibaSaturdays (1400 UTC)</h3>
        </div>
        <StaticImage
            className="level"
            src="../images/SHIBASATS.png"
            width={960}
            height={540}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="An Elrond Shiba this one is number 164"
            style={{ marginBottom: `1.45rem` }}
          />
      </div>
    </div>
    <div className="container is-fluid spacer-zone eshib-bg-2">
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
          <li><p className="syrup-text"><WaflToken />1 WAFL per Garden⛲️</p></li>
          <li><p className="syrup-text"><WaflToken /><WaflToken />2 WAFL per Farm🚜</p></li>
          <li><p className="syrup-text"><WaflToken /><WaflToken /><WaflToken />3 WAFL per Castle🏯</p></li>
          <li><p className="syrup-text"><WaflToken /><WaflToken /><WaflToken /><WaflToken />4 WAFL per Spaceship🚀</p></li>
        </ul>
      </div>
      </div>
    </div>
    <div className="container is-fluid spacer-zone eshib-bg-3" id="rarity">
      <div className="act-zone">
        <h1 className="">Rarity</h1>
        <h1 className="">shib carousel 2</h1>
      </div>
    </div>
    <div className="container is-fluid wafl-background">
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
    <div className="container is-fluid spacer-zone eshib-bg-4">
      <div className="act-zone">
        <h1 className="" id="whitepaper">
          <Link to="/whitepaper">Whitepaper</Link>
        </h1>
      </div>
    </div>
    <div className="container is-fluid wafl-background">
      <div className="act-zone">
        <h1 className="syrup-text">WAFL can buy Rare Shibaworld NFTs like AniShib and 3DShib</h1>
      </div>
    </div>
    <div className="container is-fluid spacer-zone eshib-bg-5">
      <div className="act-zone">
        <h1 className="mt-5 ml-5">Packs of Shibas create FREE SFTs</h1>
        <p>Join us! Adopt a Shiba or ten and earn a Shiba Garden! <Link to="/whitepaper">Read more about our unique project in the Whitepaper</Link>!</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
