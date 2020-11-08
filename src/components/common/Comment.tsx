import React from "react"
import styled from "styled-components"

const CommentStyled = styled.p`
  color: ${(props) => props.theme.colors.grey};
`

interface Props {
  title: string
}

const Button: React.FC<Props> = ({ title }) => {
  return <CommentStyled>// {title}</CommentStyled>
}

export default Button
