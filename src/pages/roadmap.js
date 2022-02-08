import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
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
        <p>December 2021 - First wave</p>
        <p>January 2022 - Second, Third, Fourth Waves</p>
        <p>February 2022 - Fifth Wave Sells out in 3 minutes</p>
      </div>
      <div className="container pt-3 pl-3 is-fluid">
      <h2>Upcoming Waves</h2>
        <ul>
          <li>Wave 6, 0.8 EGLD, 500 Shibas</li>
          <li>50 EGLD Sweepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
          <li>Wave 7, ??? EGLD. ??? Shibas</li>
          <li>75 EGLD weepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
          <li>Wave 8,  ??? EGLD, remaining of 5000 Shibas</li> 
          <li>100 EGLD Sweepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</li>
        </ul>  
      </div>
    
    </div>

    <div className="container pt-3 pl-3 is-fluid">
      <h2> Anime Shibas (ANISHIB) and 3D Shibas (3DSHIB) NFT collections</h2>
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
