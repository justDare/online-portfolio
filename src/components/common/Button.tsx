import React from "react"
import styled from "styled-components"

const ButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.backgroundColor};
  background-color: ${(props) => props.theme.colors.primaryText};
  padding: 10px 15px;
  font-weight: 500;
  border-radius: 2px;
  border: 1px solid;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  &:hover {
    color: ${(props) => props.theme.colors.primaryText};
    background-color: ${(props) => props.theme.colors.backgroundColor};
    border-color: ${(props) => props.theme.colors.primaryText};
  }
`

interface Props {
  title: string
  type?: "button" | "reset" | "submit" | undefined
  clickHandler?: () => void
}

const Button: React.FC<Props> = ({ title, clickHandler, type }) => {
  return (
    <ButtonStyled onClick={clickHandler} type={type}>
      {title}
    </ButtonStyled>
  )
}

export default Button
