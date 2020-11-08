import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Button from "src/components/common/Button"

interface Props {
  toggleTheme: () => void
  toggleThemeTitle: string
}

const DesktopNavStyled = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`

const AnchorStyled = styled(AnchorLink)`
  font-size: 16px;
  font-weight: 700;
  margin-left: 25px;
  font-family: var(--main-font-family);
  &:last-of-type {
    margin-right: 25px;
  }
`

const DesktopNav: React.FC<Props> = ({ toggleTheme, toggleThemeTitle }) => {
  return (
    <DesktopNavStyled>
      <AnchorStyled to="/#work" title=".work()" />
      <AnchorStyled to="/#about" title=".about()" />
      <AnchorStyled to="/#tools" title=".tools()" />
      <AnchorStyled to="/#contact" title=".contact()" />
      <Button clickHandler={toggleTheme} title={toggleThemeTitle}></Button>
    </DesktopNavStyled>
  )
}

export default DesktopNav
