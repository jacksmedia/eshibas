import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const SvgBoxFfs = styled.div`
  width: 33px;
  height: 33px;
`

const SocialLinks = () => {
  return (
    <>
      <NavItem to="/" className="is-hoverable">
        <i className="fa fa-home"></i>
      </NavItem>
      <NavItem href="https://discord.gg/ark67RKkrV" className="">
        <i className="fab fa-discord is-hoverable"></i>
      </NavItem>
      <NavItem href="https://twitter.com/elrondshibas" className="">
        <i className="fab fa-twitter is-hoverable"></i>
      </NavItem>
      <NavItem href="https://www.instagram.com/elrondshibas/" className="">
        <i className="fab fa-instagram is-hoverable"></i>
      </NavItem>
      <NavItem href="https://emoon.space/collection/SHIB-50039b" className="is-hoverable">
         <div className="svg-market-1"></div>
      </NavItem>
      <NavItem href="https://deadrare.io/collection/SHIB-50039b" className="is-hoverable">
         <div className="svg-market-2"></div>
      </NavItem>
    </>
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

export default SocialLinks