import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Slider from "infinite-react-carousel"
import IO from "../components/io"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Doge = styled.span`
  padding: 1rem;
  margin: 0.85rem 0.85rem 0.85rem 0.85rem;
  transition: background 1.3s ease;
  background: ${({ isVisible }) => (isVisible ? 'navy' : 'red')};
`

const settings =  {
  arrows: false,
  arrowsBlock: false,
  autoplay: true,
  autoplaySpeed: 750,
  centerPadding: 40,
  duration: 300,
  pauseOnHover: true,
  shift: 30,
  slidesPerRow: 3,
  wheelScroll: 3
};

const Carousel = ({ settings }) => (
  <Slider { ...settings }>
    <Doge>
      <h3>1</h3>
    </Doge>
    <Doge>
      <h3>2</h3>
    </Doge>
    <Doge>
      <h3>3</h3>
    </Doge>
    <Doge>
      <h3>4</h3>
    </Doge>
    <Doge>
      <h3>5</h3>
    </Doge>
    <Doge>
      <h3>6</h3>
    </Doge>
    <Doge>
      <h3>7</h3>
    </Doge>
    <Doge>
      <h3>8</h3>
    </Doge>
    <Doge>
      <h3>9</h3>
    </Doge>
    <Doge>
      <h3>10</h3>
    </Doge>
    <Doge>
      <h3>11</h3>
    </Doge>
    <Doge>
      <h3>12</h3>
    </Doge>
  </Slider>
)

Carousel.propTypes = {
  siteTitle: PropTypes.string,
}

Carousel.defaultProps = {
  siteTitle: `Elrond Shibas`,
}

export default Carousel
