import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Nav from "./nav/nav"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const HeaderStyled = styled.header`
  height: 90px;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  z-index: 10;
  @media (max-width: 778px) {
    height: 60px;
  }
`

const HeaderContainerStyled = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.size.inner};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 1.0875rem;
`

const AnchorLinkStyled = styled(AnchorLink)`
  font-weight: 800;
  font-size: 30px;
  font-family: var(--main-font-family);
  flex-grow: 1;
`

interface Props {
  siteTitle?: string
  toggleTheme: () => void
  themeSelected: string
}

const Header: React.FC<Props> = ({ siteTitle, toggleTheme, themeSelected }) => {
  const [windowSize, setWindowSize] = useState(1200)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    // Add event listener
    window.addEventListener("resize", handleResize)
    handleResize()
  })

  return (
    <HeaderStyled>
      <HeaderContainerStyled
        data-sal="slide-down"
        data-sal-delay="1000"
        data-sal-easing="ease"
      >
        <AnchorLinkStyled
          to="/#top"
          title={windowSize >= 768 ? "darian.sampare" : "d.s"}
        />
        <Nav toggleTheme={toggleTheme} themeSelected={themeSelected} />
      </HeaderContainerStyled>
    </HeaderStyled>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
