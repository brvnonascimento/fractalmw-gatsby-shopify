import React, { ReactNode, useMemo } from 'react'
import styled from '@emotion/styled'
import { Box, BoxProps, Divider, Heading } from '@chakra-ui/core'

export interface TableColumn {
  header: ReactNode
  acessor: string
}

export interface TableProps extends BoxProps {
  title: string
  columns: TableColumn[]
  data: any[]
}

export const Table = ({ columns, title, data, ...props }: TableProps) => {
  const headers = useMemo(() => columns.map(({ header }) => header), [data])

  const acessors = useMemo(() => columns.map(({ acessor }) => acessor), [data])

  return (
    <Box
      as="table"
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
      {...props}
    >
      <tbody>
        <Box as="th" fontWeight="bold">
          <Heading as="h3">
            {title}
          </Heading>
        </Box>
        <Divider />
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
      </tbody>
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
