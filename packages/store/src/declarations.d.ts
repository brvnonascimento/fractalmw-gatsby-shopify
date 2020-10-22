declare const graphql: (query: TemplateStringsArray) => void

declare module '*.svg' {
  const content: any
  export default content
}

declare module 'gatsby-theme-shopify-manager' {
  export * from 'gatsby-theme-shopify-manager/src'
}
