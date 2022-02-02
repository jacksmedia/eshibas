import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Whitepaper = () => (
  <Layout>
    <Seo title="Whitepaper" />
    <div>
      <h1>Elrond Shibas v2 - Introducing $WAFL and ShibaWorld</h1>
      <p>$WAFL Distribution</p>
      <h2>There is a maximum total supply of 20,000,000 $WAFL</h2>
      <ul>
        <li>$WAFL will begin emitting on 2/2/22</li>
        <li>20,000,000 pre-minted maximum total supply</li>
        <li>Earned by holding Elrond Shibas (SHIB-50039b) NFT’s</li>
        <li>Earned by holding SHIBWRLD SFT’s (Collection Coming Soon)</li>
        <li>Used to buy new collections AND other use cases (See Details Below)</li>
        <li>When $WAFL is spent in ShibaWorld it is 100% BURNED</li>
      </ul>
    </div>
    <div>
      <h2>$WAFL Distribution (Detailed)</h2>
      <ul>
        <li>Holding SHIB-50039b NFTs will generate 1 $WAFL per day/per NFT</li>
        <li>Holding 5+ SHIB-50039b NFTs for 28 days in succession will earn you a SHIBA GARDEN SFT from SHIBWRLD which will also generate 1 $WAFL per day/per GARDEN</li>
        <li>Holding 10+ SHIB-50039b NFTs for 28 days in succession will earn you a SHIBA FARM SFT from SHIBWRLD which will also generate 2 $WAFL per day/per FARM</li>
        <li>Holding 25+ SHIB-50039b NFTs for 28 days in succession will earn you a SHIBA CASTLE SFT from SHIBWRLD which will also generate 3 $WAFL per day/per CASTLE</li>
        <li>Holding 50+ SHIB-50039b NFTs for 28 days in succession will earn you a SHIBA SPACESHIP SFT from SHIBWRLD which will also generate 4 $WAFL per day/per SPACESHIP</li>
        <li>SHIBWRLD SFTs can be earned more than once, by holding for consecutive 28 day periods and ARE TRADEABLE & SELLABLE</li>
        <li>The SHIBWRLD NFT Collection is capped at 7777 SFTs FMFK(First Mint, First Kept)</li>
        <li>$WAFL will be distributed weekly on Wednesdays -  #WAFL Wednesdays</li>
      </ul>
    </div>
    <h2>$WAFL Roadmap Use Cases</h2>
    <ul>
      <li>Collab collections/fusions with other creators</li>
      <li>Tradeable Asset (Pending SEC Registration and other regulations)</li>
    </ul>
    <h2>Elrond Shiba Merch Store!, funded by royalties</h2>
    <ul>
      <li>3D Print YOUR NFT, T-shirts, Hoodies, etc</li>
      <li>Sky's the limit!</li>
    </ul>
    <h2>Purchase ShibaWorld NFTs</h2>
    <ul>
      <li>Anime Shibas (ANISHIB) COMING SOON</li>
      <li>5000 Supply</li>
      <li>2,500 Purchasable ONLY with $WAFL</li>
      <li>2,500 Purchasable ONLY with $EGLD</li>
    </ul>
    <h2>Purchase 3d Shibas (3DSHIB) COMING SOON</h2>
    <ul>
      <li>5000 Supply</li>
      <li>2,500 Purchasable ONLY with $WAFL</li>
      <li>2,500 Purchasable ONLY with $EGLD</li>
      <li>Future collections: same ½ EGLD - ½ WAFL approach</li>
    </ul>
  </Layout>
)

export default Whitepaper
