import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const WaflToken = () => {
	return(
		<div>
		<Link to="/">
			<StaticImage
			className=""
			layout="fixed"
			formats={["AUTO", "WEBP", "AVIF"]}
			src="../images/wafl.png"
			width={40}
			height={40}
			quality={95}
			alt="Elrond Shibas love you!"
			/>
		</Link>
		</div>
	)
	}

	export default WaflToken
