import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Whitepaper = () => (
  <Layout>
    <Seo title="Whitepaper" />
    <div>
      <h1>Elrond Shiba v2 - Introducing $WAFL and ShibaWorld</h1>
      <h2>$WAFL Distribution</h2>
      <p>There is a maximum total supply of 20,000,000 $WAFL</p>
      <ul>
        <li>$WAFL will begin emitting on 2/2/22</li>
        <li>20,000,000 pre-minted maximum total supply</li>
        <li>Earned by holding Elrond Shibas (SHIB-50039b) NFT’s</li>
        <li>Earned by holding SHIBWRLD SFT’s (Collection Coming Soon)</li>
        <li>Used to buy new collections AND other use cases (See Details Below)</li>
        <li>When $WAFL is spent in ShibaWorld it is 100% BURNED</li>
      </ul>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Whitepaper
