import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Button from "src/components/common/Button"

interface Props {
  toggleTheme: () => void
  toggleThemeTitle: string
}

const StyledButton = styled.button`
  font-size: 30px;
  font-weight: 700;
  margin-left: 25px;
  font-family: var(--main-font-family);
  background: none;
  border: none;
  cursor: pointer;
  padding-right: 0;
  color: ${(props) => props.theme.colors.primaryText};

  &:hover {
    color: ${(props) => props.theme.colors.secondaryText};
  }

  @media (min-width: 993px) {
    display: none;
  }
`

interface OverlayProps {
  open: boolean
}

const StyledOverlay = styled.div<OverlayProps>`
  width: 100%;
  position: fixed;
  height: ${(props) => (props.open ? "100vh" : "0")};
  z-index: ${(props) => (props.open ? "1" : "-1")};
  opacity: ${(props) => (props.open ? "0.95" : "0")};
  transition: opacity 0.25s ease-in-out,
    z-index ${(props) => (props.open ? "0s" : "0.25s")} step-end;
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.colors.primaryText};
`

const StyledNavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1.95rem 1.45rem;
  height: 100%;
`

const StyledAnchor = styled(AnchorLink)`
  font-size: 30px;
  font-weight: 700;
  font-family: var(--main-font-family);
  color: ${(props) => props.theme.colors.backgroundColor};
  margin-bottom: 20px;
`

interface FadeInDivStyled {
  open: boolean
}

const AnchorDivStyled = styled.div<FadeInDivStyled>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(200px)")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: transform 0.5s ease 0.25s, opacity 1s ease-in-out 0.25s;
`

const StyledCloseButton = styled.button<FadeInDivStyled>`
  color: ${(props) => props.theme.colors.backgroundColor};
  font-size: 30px;
  font-weight: 700;
  margin-left: 25px;
  font-family: var(--main-font-family);
  background: none;
  border: none;
  cursor: pointer;
  padding-right: 0;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(200px)")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: transform 0.5s ease 0.25s, opacity 1s ease-in-out 0.25s;

  &:hover {
    color: ${(props) => props.theme.colors.secondaryText};
  }
`

const MobileNav: React.FC<Props> = ({ toggleTheme, toggleThemeTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ overflow: "hidden" }}>
      <StyledButton onClick={() => setOpen(!open)}>.find()</StyledButton>
      <StyledOverlay open={open}>
        <StyledNavContainer>
          <StyledNav>
            <div
              style={{ flexGrow: 1, display: "flex", alignItems: "baseline" }}
            >
              <StyledCloseButton open={open} onClick={() => setOpen(!open)}>
                .close()
              </StyledCloseButton>
            </div>
            <AnchorDivStyled open={open}>
              <StyledAnchor
                to="/#work"
                title=".work()"
                onAnchorLinkClick={() => setOpen(!open)}
              />
              <StyledAnchor
                to="/#about"
                title=".about()"
                onAnchorLinkClick={() => setOpen(!open)}
              />
              <StyledAnchor
                to="/#tools"
                title=".tools()"
                onAnchorLinkClick={() => setOpen(!open)}
              />
              <StyledAnchor
                to="/#contact"
                title=".contact()"
                onAnchorLinkClick={() => setOpen(!open)}
              />
              <Button
                clickHandler={toggleTheme}
                title={toggleThemeTitle}
              ></Button>
            </AnchorDivStyled>
          </StyledNav>
        </StyledNavContainer>
      </StyledOverlay>
    </div>
  )
}

export default MobileNav
