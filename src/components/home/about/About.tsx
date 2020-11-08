import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Wrapper from "src/components/common/Wrapper"
import Comment from "src/components/common/Comment"

interface ExperienceData {
  allContentfulExperience: {
    nodes: Array<{
      company: string
      contentful_id: string
      startYear: number
      title: string
      endYear: string | null
      description: {
        description: string
      }
    }>
  }
}

export default function About() {
  const data: ExperienceData = useStaticQuery(graphql`
    query MyQuery {
      allContentfulExperience(sort: { fields: startYear }) {
        nodes {
          company
          contentful_id
          startYear
          title
          endYear
          description {
            description
          }
        }
      }
    }
  `)

  return (
    <section id="about">
      <Wrapper title="about">
        <p data-sal="slide-up" data-sal-easing="ease">
          I'm a Full Stack Developer who's been building industry utilized
          applications since my second year of college. Since then, I've worked
          in startups, founded a couple myself, and taken on freelance projects
          and consulting for clients.
        </p>
        <div data-sal="slide-up" data-sal-easing="ease">
          <Comment title="Keep reading for more details on my experience ⬇️" />
        </div>

        {data.allContentfulExperience.nodes.map((experience, index) => {
          return (
            <div
              style={{ paddingTop: "50px" }}
              key={experience.contentful_id}
              data-sal="slide-up"
              data-sal-easing="ease"
            >
              <h3>
                {index}. {experience.company}
              </h3>
              <h5 className="secondary-text">{experience.title}</h5>
              <h6>{experience.startYear}</h6>
              <p>{experience.description.description}</p>
            </div>
          )
        })}
      </Wrapper>
    </section>
  )
}
