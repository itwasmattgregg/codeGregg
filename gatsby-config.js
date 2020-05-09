module.exports = {
  siteMetadata: {
    title: 'codeGregg: Minneapolis Web UI Developer',
    author: 'Matt Gregg',
    description:
      'Minneapolis-based UI engineer; many-stack artisinal crafter of the internet.',
    siteUrl: 'https://codegregg.com',
    menuLinks: [
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Resume',
        link: '/resume',
      },
      {
        name: 'Contact',
        link: '/#contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'code-gregg',
        short_name: 'codeGregg',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#1A344D',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
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
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tinywins`,
        path: `${__dirname}/src/tinywins`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
            },
          },
          `gatsby-remark-smartypants`,
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-57449109-2`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.parent.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl + edge.node.parent.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(sort: {
                  order: DESC,
                  fields: [frontmatter___date]
                }) {
                  edges {
                    node {
                      id
                      excerpt
                      html
                      parent {
                        ... on File {
                          fields {
                            slug
                          }
                        }
                      }
                      frontmatter {
                        title
                        tags
                        visible
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    // keep this at the bottom
    `gatsby-plugin-netlify`,
  ],
};
