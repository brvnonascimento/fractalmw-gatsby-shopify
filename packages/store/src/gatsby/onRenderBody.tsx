import React from 'react'
import type { GatsbySSR } from 'gatsby'
import { ColorModeScript } from '@chakra-ui/react'

const onRenderBody: GatsbySSR['onRenderBody'] = async ({
  setPreBodyComponents
}: any) => {
  setPreBodyComponents([<ColorModeScript key="chakra-ui-no-flash" />])
  // https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody
}

export default onRenderBody
