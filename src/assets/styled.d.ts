import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string
      primaryText: string
      secondaryText: string
      grey: string
    }
    size: {
      inner: string
    }
  }
}
