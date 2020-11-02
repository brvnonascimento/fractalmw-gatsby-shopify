import React, { useRef } from 'react'
import { Spinner, SpinnerProps } from '@chakra-ui/core'
import { useIntersection, IntersectionOptions } from 'use-intersection'

export interface InfiniteLoadingSpinner extends SpinnerProps {
  canInfiniteLoad: boolean
  onInfiniteLoadingTriggered: () => void
  options?: IntersectionOptions
}

export const InfiniteLoadingSpinner = ({
  canInfiniteLoad,
  onInfiniteLoadingTriggered,
  options,
  ...props
}: InfiniteLoadingSpinner) => {
  const spinner = useRef(null)
  useIntersection(spinner, options, () => {
    if (canInfiniteLoad) {
      onInfiniteLoadingTriggered()
    }
  })

  return <Spinner ref={spinner} {...props} />
}
