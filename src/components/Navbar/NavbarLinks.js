import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" className="is-hoverable">Home</NavItem>
      <NavItem to="/whitepaper" className="is-hoverable">Whitepaper</NavItem>
      <NavItem to="/roadmap" className="is-hoverable">Roadmap</NavItem>
      <NavItem to="/rarity" className="is-hoverable">Rarity</NavItem>
      <NavItem to="/wave6" className="is-hoverable">Wave 6</NavItem>
    </>
  )
}

const NavItem = styled(Link)`
  text-decoration: none;
  color: snow;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: snow;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #f0f;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

export default NavbarLinks