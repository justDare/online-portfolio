/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode, useState } from "react"
import Header from "./header/header"
import Footer from "./footer"
import { SiteTitleQuery } from "../../../graphql-types"
import styled, { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "src/assets/theme"
import { GlobalStyles } from "src/assets/globalStyles"

interface Props {
  children: ReactNode
}

const useSiteTitle = () => {
  const data = useStaticQuery<SiteTitleQuery>(
    graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return data?.site?.siteMetadata?.title || ""
}

const Layout: React.FC<Props> = ({ children }) => {
  const title = useSiteTitle()

  const [themeSelected, setThemeSelected] = useState("light")

  const toggleTheme = () => {
    if (themeSelected === "light") setThemeSelected("dark")
    else setThemeSelected("light")
  }

  return (
    <ThemeProvider theme={themeSelected === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header
        siteTitle={title}
        toggleTheme={toggleTheme}
        themeSelected={themeSelected}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: lightTheme.size.inner,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
