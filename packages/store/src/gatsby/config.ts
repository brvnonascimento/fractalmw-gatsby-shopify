import path from 'path'
import { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Fractal Music Wear',
    siteUrl: process.env.BASE_DOMAIN
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-sitemap',
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
        portalZIndex: 40
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        // Set Variation ID. 0 for original 1,2,3....
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Defers execution of google analytics script after page load
        defer: true,
        cookieDomain: process.env.GOOGLE_ANALYTICS_COOKIE_DOMAIN
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fractal Music Wear',
        short_name: 'fractalmw',
        start_url: '/',
        background_color: '#ffff',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/images/favicon.svg'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve(__dirname, '../pages/')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve(__dirname, '../images/')
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-theme-shopify-manager',
      options: {
        shopName: process.env.SHOPIFY_SHOPNAME,
        accessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        apiVersion: '2021-01'
      }
    }
  ]
}

export default config
