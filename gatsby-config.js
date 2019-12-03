module.exports = {
  siteMetadata: {
    title: `Frontend Developer`,
    description: ``,
    author: `@sehbaz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Sehbaz Rafik`,
        short_name: `Sehbaz Rafik`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `#black`,
        display: `minimal-ui`,
        icon: `src/images/footer-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
