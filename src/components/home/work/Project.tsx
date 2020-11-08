import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Comment from "src/components/common/Comment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

interface Props {
  title: string
  preview: {
    fluid: {
      aspectRatio: number
      base64: string
      sizes: string
      src: string
      srcSet: string
    }
  }
  techUsed: Array<string>
  description: string
  privateProject?: string | null
  websiteLink?: string | null
  gitHubLink?: string | null
}

interface StyledGatsbyImgBG {
  fluid: {
    aspectRatio: number
    base64: string
    sizes: string
    src: string
    srcSet: string
  }
}

const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgb(0 0 0 / 42%);
  transition: background-color 0.25s ease-in-out;
`

const StyledProjectInner = styled.div`
  padding: 50px;
  z-index: 2;
  opacity: 0;
  transform: translateY(-15px);
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;

  @media (max-width: 576px) {
    padding: 15px 25px;
  }

  p,
  h3 {
    color: white;
  }
`

const StyledProjectContainer = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;

  .gatsby-image-wrapper {
    transition: transform 3s ease-out 0s;
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
    ${StyledOverlay} {
      background-color: rgba(0, 0, 0, 0.87);
    }
    ${StyledProjectInner} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const StyledTechTags = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    background-color: ${(props) => props.theme.colors.primaryText};
    color: ${(props) => props.theme.colors.backgroundColor};
    text-transform: uppercase;
    padding: 5px 10px;
    letter-spacing: 0.2em;
    margin-right: 15px;
    margin-bottom: 15px;
  }
`

const StyledLinks = styled.div`
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }

  a {
    margin-right: 25px;
  }
`

const Project: React.FC<Props> = ({
  title,
  techUsed,
  description,
  privateProject,
  websiteLink,
  gitHubLink,
  preview,
}) => {
  return (
    <div>
      <StyledProjectContainer data-sal="slide-up" data-sal-easing="ease">
        <Img fluid={preview.fluid} key={preview.fluid.src} alt={title} />
        <StyledOverlay />
        <StyledProjectInner>
          <h3>{title}</h3>
          <p>{description}</p>
        </StyledProjectInner>
      </StyledProjectContainer>

      <div data-sal="slide-up" data-sal-easing="ease">
        <Comment title="Tech stack"></Comment>
        <StyledTechTags>
          {techUsed.map((tech) => (
            <div key={`${tech}-${title}`}>{tech}</div>
          ))}
        </StyledTechTags>
      </div>
      <div data-sal="slide-up" data-sal-easing="ease">
        <Comment title="See it in action"></Comment>
        <StyledLinks>
          {websiteLink ? (
            <a
              href={`${websiteLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the site <FontAwesomeIcon icon={faLink} />
            </a>
          ) : null}
          {gitHubLink ? (
            <a href={`${gitHubLink}`} target="_blank" rel="noopener noreferrer">
              See the code <FontAwesomeIcon icon={faGithub} />
            </a>
          ) : null}
        </StyledLinks>
        {privateProject ? (
          <p style={{ marginTop: "0" }}>
            This project is either under an NDA or being used privately in the
            wild. Source code examples and demos can be shown upon request!
          </p>
        ) : null}
      </div>
    </div>
  )
}

Project.defaultProps = {
  title: "",
  techUsed: [],
  description: "",
  privateProject: "",
  websiteLink: "",
  gitHubLink: "",
}

export default Project
