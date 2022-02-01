import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Roadmap = () => (
  <Layout>
    <Seo title="Roadmap to Shibaworld" />
    <h1>Elrond Shiba Roadmap</h1>
    <div class="timeline">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Elrond Shiba Roadmap</span>
      </header>
      <div class="timeline-item is-primary">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">Summer 2021</p>
          <p>Project brainstormed</p>
        </div>
      </div>
      <div class="timeline-item is-warning">
        <div class="timeline-marker is-image is-32x32">
          <img src="https://bulma.io/images/placeholders/32x32.png" />
        </div>
        <div class="timeline-content">
          <p class="heading">December 2021</p>
          <p>First wave</p>
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
  </Layout>
)

export default Roadmap
