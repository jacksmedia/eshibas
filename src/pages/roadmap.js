import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Roadmap = () => (
  <Layout>
    <Seo title="Roadmap to Shibaworld" />
    <div className="pl-2 pt-2 container pt-3 pl-3 is-fluid eshib-bg-13">
      <h1 className="">Roadmap</h1>
      <div className="roady act-zone center p-5">
        <div className="mapper">Mint ANISHIB NFT collection</div>
        <div className="mapper">WAFL tokens used in collabs/fusions with other NFT collections</div>
        <div className="mapper">Mint 3DSHIB NFT collection</div>
        <div className="mapper">Gateway to ShibaWorld metaverse opens</div>
        <div className="mapper">Upcoming Elrond Shiba Merch Store, funded by royalties</div>
        <div className="mapper">$WAFL registered as Tradeable Asset (SEC, other regulations)</div>
      </div>
      <div className="spacer-zone">
      </div>
      <div className="container pt-3 pl-3 is-fluid">
        <h2>Historical Progress</h2>
        <p>December 2021 - First wave (0.25 EGLD)</p>
        <p>January 2022 - Second, Third, Fourth Waves (0.3 - 0.5 EGLD)</p>
        <p>February 2022 - Fifth Wave Sells out in <strong>3 minutes</strong> (0.6 EGLD)</p>
        <p>February 2022 - Wave 6 / 0.8 EGLD / 300 Shibas</p>
      </div>
      <div className="container pt-3 pl-3 is-fluid">
      <h2>Upcoming</h2>
        <ul>
          <li>50 EGLD Sweepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
          <li><strong>Wave 7</strong>, ??? EGLD. ??? Shibas</li>
          <li>75 EGLD weepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
          <li><strong>Wave 8 & Beyond</strong>,  ??? EGLD, remaining 5000 Shibas</li> 
          <li>100 EGLD Sweepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
        </ul>  
      </div>
    
    </div>

    <div className="container pt-3 pl-3 is-fluid">
      <h2> Anime Shibas (ANISHIB) and 3D Shibas (3DSHIB) NFT collections</h2>
      <StaticImage
            className=""
            layout="fixed"
            formats={["AUTO", "GIF", "AVIF"]}
            src="../images/uwu.gif"
            width={185}
            height={185}
            quality={95}
            alt="Elrond AniShibs loves you"
          />
      <ul>
        <li>5000 Supply, each collections</li>
        <li>2,500 Buyable ONLY with $WAFL</li>
        <li>2,500 Buyable ONLY with $EGLD</li>
        <li>Future collections: same ½ EGLD - ½ WAFL approach</li>
      </ul>
    </div>
  </Layout>
)

export default Roadmap
