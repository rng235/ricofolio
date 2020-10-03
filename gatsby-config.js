module.exports = {
  siteMetadata: {
    title: 'Ricardo Guntur - Portfolio',
    author: 'Ricardo Guntur',
    description: 'A Gatsby.js V2 Starter based on Dimension by Hunter Change, revised by Ricardo Guntur',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // TODO update with personal logo
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
