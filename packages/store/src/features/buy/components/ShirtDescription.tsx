import React, { memo } from 'react'
import { BoxProps, Text } from '@chakra-ui/core'
import xss from 'xss'

interface ShirtDescriptionProps extends BoxProps {
  description: string
}

export const ShirtDescription = memo(
  ({ description, ...props }: ShirtDescriptionProps) => (
<<<<<<< HEAD
    <Text {...props} dangerouslySetInnerHTML={{ __html:  xss(description) }} />
=======
    <Text {...props} dangerouslySetInnerHTML={{ __html:  DOMPurify.sanitize(description) }} />
>>>>>>> 781ff58560046ec9f6eeeb2782360ab1376ea201
  )
)
