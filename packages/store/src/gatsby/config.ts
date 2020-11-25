import path from 'path'
import { GatsbyConfig } from 'gatsby'

// const productSearch = `
//   query ProductSearch {
//     allShopifyProduct {
//       nodes {
//         title
//         handle
//         productType
//         descriptionHtml
//         images {
//           altText
//         }
//       }
//     }
//   }
// `

// const queries = [
//   {
//     query: productSearch,
//     transformer: ({ data }: any) => data.allShopifyProduct.nodes
//   }
// ]

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
    // 'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: { isUsingColorMode: false }
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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: path.resolve(__dirname, `../data/`),
    //     ignore: [`**/\.*`] // ignore files starting with a dot
    //   }
    // },
    // {
    //   resolve: 'gatsby-source-shopify',
    //   options: {
    //     shopName: process.env.SHOPIFY_SHOPNAME,
    //     accessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    //     apiVersion: '2020-10',
    //     verbose: true,
    //     paginationSize: 250,
    //     includeCollections: ['shop', 'content']
    //   }
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    // {
    //   resolve: 'gatsby-plugin-algolia',
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_API_KEY,
    //     indexName: process.env.ALGOLIA_INDEX_NAME,
    //     queries,
    //     chunkSize: 1000
    //   }
    // },
    {
      resolve: 'gatsby-theme-shopify-manager',
      options: {
        shopName: process.env.SHOPIFY_SHOPNAME,
        accessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
      }
    }
  ]
}

export default config
