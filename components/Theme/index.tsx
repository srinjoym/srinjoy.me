import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  fonts: {
    heading: `"Inter", system-ui, sans-serif`,
    body: `"Inter", system-ui, sans-serif`,
  },
  config: {
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#fff9f4', '#080019')(props)
      },
    }),
  },
})
