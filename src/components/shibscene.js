import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import IO from "../components/io"
import { StaticImage } from "gatsby-plugin-image"

const Scene = styled.h3`
  padding: 1rem;
  margin: 0.85rem 0.85rem 0.85rem 0.85rem;
  transition: color 1.3s ease;
  color: ${({ isVisible }) => (isVisible ? 'blue' : 'red')};
`

const Shibscene = ({ scenewords }) => (
  <div className='act-styling'>
      {children.map(child=>{return(
        <IO rootMargin = '-10px'>
          {({isVisible})=>(<Scene isVisible={isVisible}>{scenewords}</Scene>)}
        </IO>
      )})}
  </div>
)

Shibscene.propTypes = {
  siteTitle: PropTypes.string,
}

Shibscene.defaultProps = {
  siteTitle: `Elrond Shibas`,
}

export default Shibscene
