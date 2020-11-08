import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
`

const StyledArrow = styled.div`
  width: 0;
  height: 40px;
  border: 1px solid ${(props) => props.theme.colors.primaryText};
  position: relative;
  animation: scroll 1.5s infinite;
  -webkit-animation: scroll 1.5s infinite;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    left: -5px;
    width: 1px;
    height: 10px;

    // triangle
    border-top: 10px solid ${(props) => props.theme.colors.primaryText};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  @keyframes scroll {
    0% {
      height: 40px;
    }
    30% {
      height: 70px;
    }
    60% {
      height: 40px;
    }
  }

  @-webkit-keyframes scroll {
    0% {
      height: 40px;
    }
    30% {
      height: 70px;
    }
    60% {
      height: 40px;
    }
  }
`

const ScrollDown = () => {
  return (
    <StyledContainer>
      <StyledArrow></StyledArrow>
    </StyledContainer>
  )
}

export default ScrollDown
