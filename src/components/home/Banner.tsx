import React from "react"
import styled from "styled-components"
import ScrollDown from "./scrollDown"

const BannerStyled = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 1100px;
`

const SubTitle = styled.h1`
  color: ${(props) => props.theme.colors.secondaryText};
`

const ScrollDownContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 40px;
`

const Banner = () => {
  return (
    <BannerStyled id="top">
      <div style={{ padding: "90px 0" }}>
        <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          Hello, I'm Darian 👋
        </h1>
        <SubTitle
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease"
        >
          I'm a Full Stack Software Engineer, die hard DragonBall Z fan, and
          occasional tech content creator.
        </SubTitle>
      </div>
      <ScrollDownContainer
        data-sal="slide-down"
        data-sal-delay="1000"
        data-sal-easing="ease"
      >
        <ScrollDown />
      </ScrollDownContainer>
    </BannerStyled>
  )
}

export default Banner
