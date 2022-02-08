import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import WaflToken from "../components/WaflToken"

const Whitepaper = () => (
  <Layout>
    <Seo title="Whitepaper" />
    <div className="pl-2 pt-2">
      <div className="container is-fluid eshib-bg-15">
        <h1>Elrond Shibas v2</h1>
        <h1>Introducing $WAFL and ShibaWorld</h1>
      </div>
      <h2>TL;DR</h2>
      <p>Your Shibas and SFTs earn you WAFL daily and pay you each Wednesday. You get SFTs after 28 days of Shiba HODL.</p>
      <div className="level columns is-mobile">
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
        <div className="column"><WaflToken /></div>
      </div>
      <h2>WAFL Token Facts</h2>
      <p>There's a total supply of 20,000,000 $WAFL tokens. No more will ever be created.</p>
      <ul>
        <li>When $WAFL is spent in ShibaWorld it is 100% BURNED</li>
        <li>$WAFL began emitting on 2/2/22</li>
        <li>Earned by holding Elrond Shibas (SHIB-50039b) NFT’s</li>
        <li>Earned by holding SHIBWRLD SFT’s (Collection Coming Soon)</li>
        <li>Used to buy new collections</li>
        <li>Other use cases! Keep reading.</li>
      </ul>
      <h2>WAFL Distribution Details</h2>
      <p>$WAFL is distributed every Wednesday 1430&nbsp;<a href="https://twitter.com/search?q=%24WAFL&src=cashtag_click" className="yikes">#WAFLWednesdays</a></p>
      <ul>
        <li>Each SHIB-50039b NFT in your wallet generates 1 $WAFL per day</li>
        <li>Each <span className="yikes">Shiba Garden</span> SFT in your wallet generates 1 $WAFL per day</li>
        <li>Each <span className="yikes">Shiba Farm</span> SFT in your wallet generates 2 $WAFL per day</li>
        <li>Each <span className="yikes">Shiba Castle</span> SFT in your wallet generates 3 $WAFL per day</li>
        <li>Each <span className="yikes">Shiba Spaceship</span> SFT in your wallet generates 4 $WAFL per day</li>
      </ul>
      <h2>Earning SFTs</h2>
      <p>After 28 days in your wallet...</p>
      <ul>
        <li>5 SHIB-50039b NFTs earn you a SHIBA GARDEN SFT from SHIBWRLD</li>
        <li>10+ NFTs earn you a SHIBA FARM SFT from SHIBWRLD</li>
        <li>25+ NFTs earn you a SHIBA CASTLE SFT from SHIBWRLD</li>
        <li>50+ NFTs earn you a SHIBA SPACESHIP SFT from SHIBWRLD</li>
      </ul>
      <h2>SHIBWRLD SFTs can be earned more than once, by holding for consecutive 28 day periods and ARE TRADEABLE & SELLABLE</h2>
      <p>The SHIBWRLD NFT Collection is capped at 7777 SFTs FMFK(First Mint, First Kept)</p>
      <h2>$WAFL Roadmap Use Cases</h2>
      <ul>
        <li>Collab collections/fusions with other creators</li>
        <li>Tradeable Asset (Pending SEC Registration, other regulations)</li>
        <li><h3>Upcoming Elrond Shiba Merch Store, funded by royalties</h3></li>
        <li>Purchase ANISHIB and 3DSHIB NFTs</li>
      </ul>
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

export default Whitepaper
