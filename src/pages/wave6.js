import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Wave6 = () => (
  <Layout>
    <Seo title="Wave 6" className="level is-mobile center-text"/>
    <h1>Wave 6 Minting 2/7/22</h1>
    <h2>1000 Shibas!</h2>
    <h3>0.8 EGLD</h3>
    <p>At UTC 1400
      <a href="https://elrondshibas.com/"> CLICK HERE</a>.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Wave6
