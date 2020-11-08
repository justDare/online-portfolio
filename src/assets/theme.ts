import { DefaultTheme } from "styled-components"

const baseTheme = {
  size: {
    inner: "1260px",
  },
}

export const lightTheme: DefaultTheme = {
  colors: {
    backgroundColor: "white",
    primaryText: "#0d0f11",
    secondaryText: "#3182ce",
    grey: "#808080",
  },
  ...baseTheme,
}

export const darkTheme: DefaultTheme = {
  colors: {
    backgroundColor: "#0d0f11",
    primaryText: "white",
    secondaryText: "#3182ce",
    grey: "#808080",
  },
  ...baseTheme,
}
