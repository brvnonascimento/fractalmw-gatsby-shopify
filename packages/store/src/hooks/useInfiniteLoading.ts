import { useCallback, useEffect, useRef } from 'react'
import { IntersectionOptions, useIntersection } from 'use-intersection'

export const useInfiniteLoading = (
  fetchMore: () => void,
  resetTargetDependencies: any[],
  intersectionOptions?: IntersectionOptions
) => {
  const target = useRef(null)
  const setTarget = useCallback((node) => {
    target.current = node
  }, resetTargetDependencies)
  const isIntersecting = useIntersection(target, intersectionOptions, fetchMore)

  console.log(target)

  useEffect(() => {
    if (fetchMore) {
      fetchMore()
    }
  }, [isIntersecting])

  return { isIntersecting, setTarget }
}
