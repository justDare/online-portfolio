import React from "react"
import styled from "styled-components"
import Button from "src/components/common/Button"
import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
`

interface Props {
  toggleTheme: () => void
  themeSelected: string
}

const formatButton = (themeString: string) => {
  if (themeString === "light") return "Dark Theme"
  else return "Light Theme"
}

const Nav: React.FC<Props> = ({ toggleTheme, themeSelected }) => (
  <NavStyled>
    <DesktopNav
      toggleTheme={toggleTheme}
      toggleThemeTitle={formatButton(themeSelected)}
    />
    <MobileNav
      toggleTheme={toggleTheme}
      toggleThemeTitle={formatButton(themeSelected)}
    />
  </NavStyled>
)

export default Nav
