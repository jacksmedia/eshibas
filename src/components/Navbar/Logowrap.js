import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logowrap = () => {
	return(
		<div>
			<StaticImage
				className=""
				layout="fixed"
				formats={["AUTO", "WEBP", "AVIF"]}
				src="./logo.png"
				width={70}
				height={70}
				quality={95}
				alt="Elrond Shibas love you!"
        />
		</div>
	)
}

export default Logowrap
