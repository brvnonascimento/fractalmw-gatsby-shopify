import React, { ReactNode, useMemo } from 'react'
import styled from '@emotion/styled'
import { Box, BoxProps, Heading } from '@chakra-ui/core'

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
    <Box
      as="table"
      display={'flex'}
      flexDirection={'column'}
      {...props}
    >
      <Box as="thead" borderBottom={'1px'} pb={'1em'} mb={'2em'}>
        <TableRow>
          <Box as="th" fontWeight="bold">
            <Heading as="h3">{title}</Heading>
          </Box>
        </TableRow>
      </Box>

      <TableBody>
        <TableRow>
          {headers.map((header, i) => (
            <TableHeader key={i}>{header}</TableHeader>
          ))}
        </TableRow>
        {data.map((d, i) => (
          <TableRow key={`row_${i}`}>
            {acessors.map((acessor, i) => (
              <TableCell key={`cell_${i}`}>{d[acessor]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>{children}</TableFooter>
    </Box>
  )
}

const TableRow = styled.tr({
  display: 'flex',
  width: '100%'
})

const TableHeader = styled.th({
  width: '100%'
})

const TableCell = styled.td({
  display: 'flex',
  width: '100%',
  justifyContent: 'center'
})

const TableBody = styled.tbody({
  display: 'flex',
  flexDirection: 'column'
})

const TableFooter = styled.tfoot({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '0.5em',
  paddingRight: '1em',
  paddingLeft: '1em',
  justifyContent: 'center'
})
