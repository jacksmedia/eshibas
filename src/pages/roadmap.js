import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Roadmap = () => (
  <Layout>
    <Seo title="Roadmap to Shibaworld" />
    <div className="pl-2 pt-2">
      <h1>Elrond Shiba CDO/DAO Roadmap</h1>
      <ul>
        <li><h1>💰100% Mint -> Community Wallet until Collection Sold Out!</h1></li>
        <li><h1>💰25% Mint -> Community Wallet</h1></li>
        <li><h1>💰75% Royalties -> Community Wallet</h1></li>
        <li><h1>💰Weekly LKMex to NFT Holders Every Saturday!</h1></li>      
      </ul>
      <div className="timeline">
        <header className="timeline-header">
          <span className="tag is-medium is-primary">Elrond Shiba Roadmap</span>
        </header>
        <div className="timeline-item is-primary">
           <div className="timeline-marker is-image is-32x32">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading">December 2021</p>
            <p>First wave</p>
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <p className="heading">Upcoming Waves</p>
            <p>Wave 6 Elrond Shiba NFTs for 0.8 EGLD. (1000 Shibas)</p>
            <p>50 EGLD Sweepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</p>
            <p>Wave 7 Elrond Shiba NFTs for ??? EGLD. (1100 Shibas)</p>
            <p>75 EGLD weepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</p>
            <p>Wave 8 Elrond Shiba NFTs for ??? EGLD. (1100 Shibas)</p> 
            <p>100 EGLD Sweepstakes - for all Discord Members - No Purchase Necessary (20 Winners)</p>
            <h3>v2 Collections, ShibaWorld, and Beyond!</h3>
          </div>
          <div className="timeline-marker">ShibaWorld</div>
          <div className="timeline-content">
            <p className="heading">$WAFL Distribution</p>
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
          <div className="timeline-content">
            <p className="heading">SFT Awards by Tier </p>
            <p>Every 28 Days you will get a Garden/Farm/Castle/Spaceship</p>
            <p>5 Shiba yield 1 Garden</p>
            <p>10 Shiba yield 1 Farm</p>
            <p>25 Shiba yield 1 Castle</p>
            <p>50 Shiba yield 1 Spaceship</p>
            <p>Each Garden/Castle/Spaceship earns WAFL!</p>
            <p>After 28 days more you will get another garden! Continues until garden supply exhausted.</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-primary">January 2022</span>
                    <div className="timeline-marker is-icon">
            <i className="fa fa-flag"></i>
          </div>
        </header>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">End of Mints</span>
        </header>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Roadmap
