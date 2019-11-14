module.exports = {
    siteMetadata: {
      title: 'Rylie Johnson | Portfolio',
      description:
        'A site built to showcase the skills and life of Rylie Johnson.',
    },
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          },
          gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
          plugins: [{ resolve: 'gatsby-remark-images' }],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: 'posts',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: 'images',
        },
      },
      {
        resolve: 'gatsby-source-instagram',
        options: {
          username: 'newageairbender',
        },
      },
      {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
          production: true,
          disable: !process.env.ANALYZE_BUNDLE_SIZE,
          generateStatsFile: true,
          analyzerMode: 'static',
        },
      },
    ],
  };