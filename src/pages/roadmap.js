import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Roadmap = () => (
  <Layout>
    <Seo title="Roadmap to Shibaworld" />
    <div className="pl-2 pt-2">
      <h1>Elrond Shiba Roadmap</h1>
      <div class="timeline">
        <header class="timeline-header">
          <span class="tag is-medium is-primary">Elrond Shiba Roadmap</span>
        </header>
        <div class="timeline-item is-primary">
           <div class="timeline-marker is-image is-32x32">
            <i class="fa fa-flag"></i>
          </div>
          <div class="timeline-content">
            <p class="heading">December 2021</p>
            <p>First wave</p>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">SFT Awards by Tier</p>
            <p>Every 28 Days you will get 1 Garden/Castle/Spaceship</p>
            <p>10 Shiba => Garden</p>
            <p>25 Shiba => Castle</p>
            <p>50 Shiba => Spaceship</p>
            <p>Each Garden/Castle/Spaceship earns WAFL!</p>
            <p>After 28 days more you will get another garden! Continues until garden supply exhausted.</p>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-primary">January 2022</span>
        </header>
        <div class="timeline-item is-danger">
          <div class="timeline-marker is-icon">
            <i class="fa fa-flag"></i>
          </div>
          <div class="timeline-content">
            <p class="heading">2022</p>
            <p>Twelfth Wave mints</p>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-medium is-primary">End of Mints</span>
        </header>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Roadmap
