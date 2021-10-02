module.exports = {
  siteMetadata: {
    title: `Whitefield, Bangalore`,
    description: `Adarsh Sarvana is an Upcoming project by Prestige Group at Bangalore. Get the updated Details of Adarsh Sarvana price, review, Location, and Contact Us Booking Assistance.`,
    author: `@jithendraathipatla`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`, {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-155154594-9",
      head: true,
    },
  },
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
        background_color: `#4450a8db`,
        theme_color: `#4450a8db`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
