import { Link } from "gatsby"
import React from "react"
import Image from "../components/layout/image"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Banner from "src/components/home/Banner"
import Projects from "src/components/home/work/Work"
import About from "src/components/home/about/About"
import Contact from "src/components/home/contact/Contact"
import Tools from "src/components/home/Tools"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <Banner />
    <Projects />
    <About />
    <Tools />
    <Contact />
  </Layout>
)

export default IndexPage
