import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    body: {
      width: '100vw',
      minHeight: '100vh',
      overflowX: 'hidden'
    },
    ul: {
      listStyleType: 'none'
    }
  },
  colors: {
    gray: {
      50: '#f3f3f3'
    },
    purple: {
      800: '#9753cf'
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 0
      },
      variants: {
        outline: () => ({
          border: '2px solid',
          borderColor: 'black'
        })
      }
    }
  }
})

export default theme
