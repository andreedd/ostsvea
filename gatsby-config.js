require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Östsvea`,
    description: `Östsvea vid Åbo Akademi rf`,
    author: `github @andreedd`,
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
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`page`, `link`, `unlinked-page`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#5e0b15`,
        theme_color: `#5e0b15`,
        display: `minimal-ui`,
        icon: `src/images/ostsvealogoclean.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
