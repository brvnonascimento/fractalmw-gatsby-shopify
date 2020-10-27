import React, { memo } from 'react'
import { BoxProps, Text } from '@chakra-ui/core'
import DOMPurify from 'dompurify'

const clean = (html: string) => DOMPurify.sanitize(html)

interface ShirtDescriptionProps extends BoxProps {
  description: string
}

export const ShirtDescription = memo(
  ({ description, ...props }: ShirtDescriptionProps) => (
    <Text {...props} dangerouslySetInnerHTML={{ __html: clean(description) }} />
  )
)
