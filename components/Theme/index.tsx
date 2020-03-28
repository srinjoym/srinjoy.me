import { theme } from "@chakra-ui/core";

const myTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: `"Inter", system-ui, sans-serif`,
    body: `"Inter", system-ui, sans-serif`
  }
}

export default myTheme