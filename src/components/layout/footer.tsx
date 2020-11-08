import React from "react"
import styled from "styled-components"

const FooterStyled = styled.footer`
  text-align: center;
`

const Footer = () => {
  return (
    <FooterStyled>
      <p>© {new Date().getFullYear()} Darian Sampare. All rights reserved.</p>
      <p>Built with ❤️ in Victoria, BC</p>
    </FooterStyled>
  )
}

export default Footer
