import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const SecondPage: React.FC = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
