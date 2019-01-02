module.exports = {
  siteMetadata: {
    title: 'Code Gregg: Minneapolis Web Development',
    author: 'Matt Gregg',
    description: 'Minneapolis Web Developer',
    siteUrl: 'https://codegregg.com',
    menuLinks: [
      {
        "name": "Blog",
        "link": "/blog"
      },
      {
        "name": "Contact",
        "link": "#contact"
      }
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'code-gregg',
        short_name: 'codeGregg',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: 'green',
        display: 'minimal-ui',
        icon: 'src/images/codeGregg.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
