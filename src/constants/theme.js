import { extendTheme } from '@chakra-ui/react'
import "@fontsource/dm-sans"

// Color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

// Theme global styles
const global = {
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'white',
        color: 'blackalpha.800',
      },
      // styles for the `a`
      a: {
        color: 'purple.800',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
          outline: 'none',
        },
        _focus: {
          textDecoration: 'none',
          outline: 'none',
        },
        _active: {
          textDecoration: 'none',
          outline: 'none',
        },
      },
    },
  },
}

// Theme colors 
const colors = {
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
}

// Extend the theme
const theme = extendTheme({ config, global, colors })
export default theme