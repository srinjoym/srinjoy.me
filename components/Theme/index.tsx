import { theme as defaultTheme } from "@chakra-ui/core";

export const theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    heading: `"Inter", system-ui, sans-serif`,
    body: `"Inter", system-ui, sans-serif`
  }
}

export const colorConfig = theme => ({
  light: {
    color: theme.colors.gray[800],
    bg: undefined,
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[400],
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[900],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400],
  },
})
