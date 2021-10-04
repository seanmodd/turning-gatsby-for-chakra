require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `VAR-X`,
    description: `The premier developer clothing line. By developers, for developers. High quality, custom-designed shirts, hats, and hoodies.`,
    author: `Zachary Reece`,
    keywords: [
      'clothing',
      'developer',
      'programmer',
      'coding',
      'code',
      'websites',
      'web developer',
      'hats',
      'shirts',
      'hoodies',
    ],
    siteUrl: 'https://formstorm.design',
    twitterUsername: '@zacharydreece',
    defaultImage: '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://formstorm.design',
        sitemap: 'https://formstorm.design/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Poppins:700:latin',
            'Poppins:700,600,500,400,300:latin',
            'Barlow:700,600,500,400,300,200:latin',
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_STRAPI_URL,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`product`, `category`, `variant`],
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: 'blurred',
          breakpoints: [300, 600, 960, 1280, 1920],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VAR-X`,
        short_name: `VAR-X`,
        start_url: `/`,
        background_color: `#6600ff`,
        theme_color: `#6600ff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
