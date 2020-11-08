import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Project from "./Project"
import styled from "styled-components"
import Wrapper from "src/components/common/Wrapper"

interface ProjectData {
  allContentfulProject: {
    edges: Array<{
      node: {
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
        description: {
          internal: {
            content: string
          }
        }
        websiteLink?: string
        gitHubLink?: string
        privateProject?: {
          internal: {
            content: string
          }
        }
        contentful_id: string
      }
    }>
  }
}

const StyledProjectContainer = styled.div`
  :not(:last-of-type) {
    margin-bottom: 100px;
  }
`

export default function Projects() {
  const data: ProjectData = useStaticQuery(graphql`
    query ProjectsQuery {
      allContentfulProject(sort: { fields: order }) {
        edges {
          node {
            title
            techUsed
            preview {
              fluid(maxWidth: 1260) {
                ...GatsbyContentfulFluid
              }
            }
            privateProject {
              internal {
                content
              }
            }
            description {
              internal {
                content
              }
            }
            gitHubLink
            websiteLink
            contentful_id
          }
        }
      }
    }
  `)

  return (
    <section id="work">
      <Wrapper title="work">
        {data.allContentfulProject.edges.map(({ node }) => {
          return (
            <StyledProjectContainer key={node.contentful_id}>
              <Project
                title={node.title}
                preview={node.preview}
                techUsed={node.techUsed}
                description={node.description.internal.content}
                websiteLink={node.websiteLink}
                gitHubLink={node.gitHubLink}
                privateProject={node.privateProject?.internal.content}
              />
            </StyledProjectContainer>
          )
        })}
      </Wrapper>
    </section>
  )
}
