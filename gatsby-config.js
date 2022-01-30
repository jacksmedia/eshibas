module.exports = {
  siteMetadata: {
    title: `Elrond Shibas`,
    description: `Shiba pets that pay you! Join us in Shibaworld.`,
    author: `@elrondshibas`,
    siteUrl: `https://elrondshibas.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0172BD`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#0172BD`,
        display: `minimal-ui`,
        icon: `src/images/mainshib.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/components/typography`,
        omitGoogleFont: true
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
