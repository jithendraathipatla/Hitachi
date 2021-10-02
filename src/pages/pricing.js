import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import TitleComponant from "../components/titlecomponent"
import Img from "gatsby-image/withIEPolyfill"
import PricingComponent from '../components/pricing'


const Overview = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Coming-Soon-Project.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Adarsh Sarvana Pricing" />
      <div style={{ paddingTop: "13vh", textAlign: "center" }}>
        <TitleComponant title="Sarvana Pricing"/>
        <br/>
         <PricingComponent/>
        <hr />
      </div>
    </Layout>
  )
}

export default Overview
