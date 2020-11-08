import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Comment from "src/components/common/Comment"
import Wrapper from "src/components/common/Wrapper"

interface ToolsData {
  allContentfulTechnology: {
    nodes: Array<{
      techList: Array<string>
      contentful_id: string
      category: string
    }>
  }
}

const StyledToolsDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
`

const StyledToolsCol = styled.div`
  width: 33.33%;

  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 778px) {
    width: 100%;
  }
`

export default function About() {
  const data: ToolsData = useStaticQuery(graphql`
    query ToolsQuery {
      allContentfulTechnology(sort: { fields: category }) {
        nodes {
          techList
          contentful_id
          category
        }
      }
    }
  `)

  return (
    <section id="tools">
      <Wrapper title="tools">
        <Comment title="I like to think I'm language agnostic, but here are some of my favorite tools right now" />
        <StyledToolsDiv data-sal="slide-up" data-sal-easing="ease">
          {data.allContentfulTechnology.nodes.map((skills) => {
            return (
              <StyledToolsCol key={skills.contentful_id}>
                <h6 className="secondary-text">{skills.category}</h6>
                {skills.techList.map((tech, index) => {
                  return <p key={index + skills.contentful_id}>{tech}</p>
                })}
              </StyledToolsCol>
            )
          })}
        </StyledToolsDiv>
      </Wrapper>
    </section>
  )
}
