import React from "react"
import styled from "styled-components"

const WrapperStyled = styled.div`
  color: ${(props) => props.theme.colors.secondaryText};
  margin: 10rem 0;
`

const WrapperInnerStyled = styled.div`
  padding-left: 50px;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding-left: 25px;
  }

  @media (max-width: 576px) {
    padding-left: 0;
  }
`

interface Props {
  title: string
}

const Button: React.FC<Props> = ({ title, children }) => {
  return (
    <WrapperStyled>
      <h1 className="secondary-text">{`<wrapper id="${title}">`}</h1>
      <WrapperInnerStyled>{children}</WrapperInnerStyled>
      <h1 className="secondary-text">{`</wrapper>`}</h1>
    </WrapperStyled>
  )
}

export default Button
