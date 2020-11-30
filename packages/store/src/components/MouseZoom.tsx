import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { useRef, useState } from 'react'

interface MouseZoomProps extends BoxProps {
  image: string
  scale?: number
  canZoom?: boolean
  bgColor?: string
}

interface MousePosition {
  x: number
  y: number
}

export const MouseZoom = ({
  image,
  scale = 3,
  canZoom = true,
  bgColor,
  ...props
}: MouseZoomProps) => {
  const containerPosition = useRef<HTMLDivElement | null>(null)
  const [mousePosition, setMousePosition] = useState<MousePosition | null>(null)

  return (
    <Box
      onMouseMove={(e) => {
        setMousePosition({ x: e.pageX, y: e.pageY })
      }}
      onMouseLeave={() => {
        setMousePosition(null)
      }}
      position={'absolute'}
      h={'100%'}
      w={'100%'}
      top={0}
      left={0}
      overflow={'hidden'}
      {...props}
    >
      {mousePosition !== null && canZoom && (
        <Box
          ref={containerPosition}
          position={'absolute'}
          h={'100%'}
          w={'100%'}
          top={0}
          left={0}
          backgroundRepeat={'no-repeat !important'}
          backgroundPosition={'center'}
          backgroundSize={'cover'}
          transition={'transform 0.5s ease-in'}
          background={bgColor}
          backgroundColor={bgColor}
          backgroundImage={`url(${image})`}
          transform={`scale(${scale})`}
          backgroundBlendMode={'multiply'}
          transformOrigin={`${
            containerPosition.current
              ? ((mousePosition.x -
                  containerPosition.current?.getBoundingClientRect().left) /
                  containerPosition.current?.getBoundingClientRect().width) *
                100
              : 0
          }% ${
            containerPosition.current
              ? ((mousePosition.y -
                  containerPosition.current?.getBoundingClientRect().top) /
                  containerPosition.current?.getBoundingClientRect().height) *
                100
              : 0
          }%`}
        />
      )}
    </Box>
  )
}
