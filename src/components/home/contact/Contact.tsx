import React from "react"
import styled from "styled-components"
import Wrapper from "src/components/common/Wrapper"
import Comment from "src/components/common/Comment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import Form from "./Form"

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
`

const StyledCol = styled.div`
  width: 50%;

  @media (max-width: 992px) {
    width: 100%;

    &:first-of-type {
      margin-bottom: 50px;
    }
  }
`

const StyledIcons = styled.div`
  display: flex;

  a {
    font-size: 34px;
    margin-right: 25px;
  }
`

const Contact = () => {
  return (
    <section id="contact">
      <Wrapper title="contact">
        <StyledRow>
          <StyledCol data-sal="slide-up" data-sal-easing="ease">
            <h1>Get in touch 📡</h1>
            <p style={{ marginBottom: "50px" }}>
              Have any questions?
              <br />
              Shoot me an email or find me around the web.
            </p>
            <Comment title="Some socials" />
            <StyledIcons>
              <a
                href="https://www.linkedin.com/in/dariansampare/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/justDare"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </StyledIcons>
          </StyledCol>
          <StyledCol data-sal="slide-up" data-sal-easing="ease">
            <Form />
          </StyledCol>
        </StyledRow>
      </Wrapper>
    </section>
  )
}

export default Contact
