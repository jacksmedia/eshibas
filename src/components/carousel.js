import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Slider from "infinite-react-carousel"
import IO from "../components/io"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Scene = styled.h3`
  padding: 1rem;
  margin: 0.85rem 0.85rem 0.85rem 0.85rem;
  transition: color 1.3s ease;
  color: ${({ isVisible }) => (isVisible ? 'blue' : 'red')};
`

const settings =  {
  arrows: false,
  arrowsBlock: false,
  autoplay: true,
  autoplaySpeed: 1000,
  centerPadding: 40,
  duration: 300,
  pauseOnHover: false,
  shift: 30,
  slidesPerRow: 3,
  wheelScroll: 3
};

const Carousel = ({ settings }) => (
  <div>
        <span>CustomSlider</span>
        <Slider { ...settings }>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
        </Slider>
      </div>
)

Carousel.propTypes = {
  siteTitle: PropTypes.string,
}

Carousel.defaultProps = {
  siteTitle: `Elrond Shibas`,
}

export default Carousel
