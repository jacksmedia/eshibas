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
        </header>
        <div className="timeline-item is-danger">
          <div className="timeline-marker is-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading">2022</p>
            <p>Twelfth Wave mints</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">End of Mints</span>
        </header>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Roadmap
