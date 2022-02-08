import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SocialDesktopLinks = () => {
  return (
    <div className="is-hidden-touch">
      <NavItem href="https://discord.gg/ark67RKkrV" className="is-hoverable">
        <div className="desky-links">Discord</div>
      </NavItem>
      <NavItem href="https://twitter.com/elrondshibas" className="is-hoverable">
        <div className="desky-links">Twitter</div>
      </NavItem>
      <NavItem href="https://www.instagram.com/elrondshibas/" className="is-hoverable">
        <div className="desky-links">Insta</div>
      </NavItem>
      <NavItem href="https://trust.market/collection/SHIB-50039b" className="is-hoverable">
        <div className="desky-links">TrustMarket</div>
      </NavItem>
      <NavItem href="https://deadrare.io/collection/SHIB-50039b" className="is-hoverable">
        <div className="desky-links">DeadRare</div>
      </NavItem>
    </div>
  )
}

const NavItem = styled(Link)`
  text-decoration: none;
  color: snow;
  display: inline-block;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: #f0f;
    ::after {
      width: 100%;
    }
  }
`

export default SocialDesktopLinks