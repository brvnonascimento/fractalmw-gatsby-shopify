import React, { ReactNode, useMemo } from 'react'
import { Box, BoxProps, Heading } from '@chakra-ui/react'

export interface TableColumn {
  header: ReactNode
  acessor: string
}

export interface TableProps extends BoxProps {
  title?: string
  columns: TableColumn[]
  data: any[]
}

export const Table = ({
  columns,
  title,
  data,
  children,
  ...props
}: TableProps) => {
  const headers = useMemo(() => columns.map(({ header }) => header), [data])

  const acessors = useMemo(() => columns.map(({ acessor }) => acessor), [data])

  return (
    <Box as="table" display={'flex'} flexDirection={'column'} {...props}>
      <Box as="thead" borderBottom={'1px'} pb={'1em'} mb={'2em'}>
        <Box as={'tr'} d={'flex'} w={'100%'}>
          <Box as="th" fontWeight="bold">
            <Heading as="h3">{title}</Heading>
          </Box>
        </Box>
      </Box>

      <Box as={'tbody'} d={'flex'} flexDirection={'column'}>
        <Box as={'tr'} d={'flex'}>
          {headers.map((header, i) => (
            <Box as={'th'} w={'100%'} key={i}>
              {header}
            </Box>
          ))}
        </Box>
        {data.map((d, i) => (
          <Box as={'tr'} d={'flex'} key={`row_${i}`}>
            {acessors.map((acessor, i) => (
              <Box
                as={'td'}
                d={'flex'}
                w={'100%'}
                justifyContent={'center'}
                key={`cell_${i}`}
              >
                {d[acessor]}
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Box
        as={'tfoot'}
        d={'flex'}
        flexDirection={'column'}
        mt={'0.5em'}
        px={'1em'}
        justifyContent={'center'}
      >
        {children}
      </Box>
    </Box>
  )
}
