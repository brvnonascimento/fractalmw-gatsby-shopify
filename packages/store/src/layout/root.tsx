import React from 'react'
import { GatsbyBrowser } from 'gatsby'

const root: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <>{element}</>
}

export default root
