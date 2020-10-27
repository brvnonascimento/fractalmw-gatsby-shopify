import React, { memo } from 'react'
import { BoxProps, Text } from '@chakra-ui/core'
import xss from 'xss'

interface ShirtDescriptionProps extends BoxProps {
  description: string
}

export const ShirtDescription = memo(
  ({ description, ...props }: ShirtDescriptionProps) => (
    <Text {...props} dangerouslySetInnerHTML={{ __html:  xss(description) }} />
  )
)
